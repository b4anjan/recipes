# Mohan's Kitchen

Simple, fresh recipes by **Mohan Karki**, built to cook from your phone.

**Live site:** https://b4anjan.github.io/recipes/

## Recipes

| Recipe | Time | Link |
| --- | --- | --- |
| Chipotle-Style Corn Salsa | 5 min, no cooking | [corn-salsa.html](https://b4anjan.github.io/recipes/corn-salsa.html) |

## What each recipe page does

- **Start cooking**: full-screen, one step at a time, keeps the screen awake
- **Timers**: tap to start, beep when done, several can run at once
- **Servings and units**: scale every amount, switch between US and metric
- **Ingredient checklist**: tap each ingredient as you gather it (remembered on that device)
- **Share**: opens the phone's share sheet, or copies the link

Each page is a single HTML file with no build step, so it also works when opened straight from a download.

## Adding a recipe

1. Copy `corn-salsa.html` to a new file, for example `guacamole.html`.
2. Edit the `ING` (ingredients) and `STEPS` arrays near the bottom, plus the title and intro text.
3. Add a card for it in `index.html` under **Recipes**.
4. Commit and push. GitHub Pages updates within a minute or two.

## Credits

- Corn salsa recipe adapted from [From Valerie's Kitchen](https://www.fromvalerieskitchen.com/easy-corn-salsa-chipotle-copycat/).
- Ingredient photos are hotlinked from Wikimedia Commons; each file page lists its author and license:
  [Fresh Sweet Corn](https://commons.wikimedia.org/wiki/File:Fresh_Sweet_Corn.jpg) ·
  [Corn on the cob](https://commons.wikimedia.org/wiki/File:Corn_on_the_cob_(sweet_corn).jpg) ·
  [Red onion](https://commons.wikimedia.org/wiki/File:Red_onion_cut.jpg) ·
  [Jalapeño](https://commons.wikimedia.org/wiki/File:Jalapenyo.jpg) ·
  [Lime](https://commons.wikimedia.org/wiki/File:Lime_-_whole_and_halved.jpg) ·
  [Cilantro](https://commons.wikimedia.org/wiki/File:Homemade_Grown_Coriandum_Sativum_(Cilantro).jpg)
