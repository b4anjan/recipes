// Mohanika's Kitchen service worker.
// Its only job is showing timer notifications and reopening the recipe when one is tapped.
// No caching, so recipe pages always load fresh from the site.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "./";
  const base = url.split("#")[0];
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.split("#")[0] === base && "focus" in c) return c.focus();
      }
      return self.clients.openWindow(url);
    })
  );
});
