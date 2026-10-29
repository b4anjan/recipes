/* Background music for Mohanika's Kitchen.
   - Starts when a page opens. Browsers block sound until the visitor taps the page once,
     so if autoplay is refused, the music starts on the first tap anywhere.
   - Carries on across pages: the play position is saved when you leave a page and the next
     page picks up from the same spot (there is a short gap while the next page loads).
   - The floating button pauses and resumes. If the visitor pauses, it stays paused on the
     other pages for the rest of the visit.
   - A ringing cooking timer pauses the music; it resumes after "Stop alarm". */
(() => {
  const SRC = "audio/take-a-little.m4a";
  const TITLE = "Take a Little · Jaxson Blue";
  const KEY = "mk-music";
  let st = {};
  try { st = JSON.parse(sessionStorage.getItem(KEY)) || {}; } catch (e) {}

  const a = new Audio();
  a.src = SRC; a.loop = true; a.preload = "auto"; a.volume = 0.6;
  let blocked = false, pausedForAlarm = false;

  const css = `
.mk-music{position:fixed;z-index:25;left:max(12px,env(safe-area-inset-left,0px));bottom:calc(14px + env(safe-area-inset-bottom,0px));
  display:inline-flex;align-items:center;gap:8px;height:44px;min-width:44px;padding:0 12px;border:0;border-radius:999px;cursor:pointer;
  background:var(--fg,#1d221c);color:var(--bg,#fff);font:700 .85rem/1 system-ui,sans-serif;box-shadow:0 4px 16px rgb(0 0 0 / .25);
  transition:bottom .2s}
.mk-music:focus-visible{outline:3px solid #f2b705;outline-offset:2px}
.mk-music .ic{width:18px;height:18px;display:inline-flex;align-items:flex-end;justify-content:center;gap:2px}
.mk-music .ic i{width:3px;border-radius:2px;background:currentColor;height:6px}
.mk-music.on .ic i{animation:mkEq .9s ease-in-out infinite}
.mk-music.on .ic i:nth-child(2){animation-delay:-.3s}.mk-music.on .ic i:nth-child(3){animation-delay:-.6s}
@keyframes mkEq{0%,100%{height:5px}50%{height:16px}}
.mk-music .ic svg{width:16px;height:16px}
.mk-music .lbl:empty{display:none}
@media (prefers-reduced-motion: reduce){.mk-music.on .ic i{animation:none;height:12px}}`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "mk-music";
  btn.title = TITLE;
  btn.innerHTML = `<span class="ic" aria-hidden="true"></span><span class="lbl"></span>`;
  const ic = btn.querySelector(".ic"), lbl = btn.querySelector(".lbl");

  function render() {
    const on = !a.paused;
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-pressed", String(on));
    btn.setAttribute("aria-label", on ? "Pause music" : "Play music");
    ic.innerHTML = on
      ? "<i></i><i></i><i></i>"
      : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    lbl.textContent = on ? "" : (blocked && !st.userPaused ? "Tap to play music" : "Music");
  }
  function save() {
    try {
      sessionStorage.setItem(KEY, JSON.stringify({
        t: a.currentTime || 0, playing: !a.paused || pausedForAlarm, ts: Date.now(), userPaused: !!st.userPaused
      }));
    } catch (e) {}
  }
  function tryPlay() {
    return a.play().then(() => { blocked = false; render(); })
      .catch(() => { blocked = true; render(); armFirstTap(); });
  }
  let armed = false;
  function armFirstTap() {
    if (armed) return; armed = true;
    const types = ["pointerdown", "keydown", "touchend"];
    const go = (e) => {
      if (e.target && e.target.closest && e.target.closest(".mk-music")) return;
      types.forEach(t => document.removeEventListener(t, go, true));
      armed = false;
      if (!st.userPaused && !pausedForAlarm) tryPlay();
    };
    types.forEach(t => document.addEventListener(t, go, true));
  }

  btn.addEventListener("click", () => {
    if (a.paused) { st.userPaused = false; pausedForAlarm = false; tryPlay(); }
    else { st.userPaused = true; a.pause(); }
    save(); render();
  });
  a.addEventListener("play", render);
  a.addEventListener("pause", render);
  a.addEventListener("loadedmetadata", () => {
    if (!st.t) return;
    let t = st.t + (st.playing ? (Date.now() - (st.ts || Date.now())) / 1000 : 0);
    if (a.duration && isFinite(a.duration)) t = t % a.duration;
    try { a.currentTime = t; } catch (e) {}
  }, { once: true });
  window.addEventListener("pagehide", save);
  setInterval(save, 2000);

  // Keep the button above the cooking-timer bar on recipe pages.
  function place() {
    const dock = document.getElementById("dock");
    const h = dock ? dock.offsetHeight : 0;
    btn.style.bottom = h > 30 ? `${h + 8}px` : "";
  }

  // Called by the recipe pages' timers: pause while an alarm rings, resume after it stops.
  window.kitchenMusic = {
    alarm(on) {
      if (on && !a.paused) { pausedForAlarm = true; a.pause(); }
      else if (!on && pausedForAlarm) { pausedForAlarm = false; if (!st.userPaused) tryPlay(); }
    }
  };

  function start() {
    document.body.appendChild(btn);
    const dock = document.getElementById("dock");
    if (dock && "ResizeObserver" in window) new ResizeObserver(place).observe(dock);
    render();
    if (!st.userPaused) tryPlay();
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
