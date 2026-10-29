# Mohanika's Kitchen

Simple, fresh recipes by **Mohan Karki**, built to cook from your phone.

**Live site:** https://b4anjan.github.io/recipes/

## Recipes

| Recipe | Time | Link |
| --- | --- | --- |
| Chipotle-Style Corn Salsa | 5 min, no cooking | [corn-salsa.html](https://b4anjan.github.io/recipes/corn-salsa.html) |
| Spicy Chicken Keema (Indian / Nepali style) | 45 min | [chicken-keema.html](https://b4anjan.github.io/recipes/chicken-keema.html) |
| Nepali-Style Chili Oil | 20 min | [chili-oil.html](https://b4anjan.github.io/recipes/chili-oil.html) |

## What each recipe page does

- **Start cooking**: highlights the current step right on the page; tap **Done** to move to the next one (keeps the screen awake)
- **Timers**: tap to start; several can run at once. When one finishes, a full-screen alarm rings (sound, and vibration on Android) until you tap **Stop alarm**, and a phone notification appears (Android browsers; on iPhone after adding the site to the Home Screen). `sw.js` only handles these notifications and does no caching
- **Heat and stirring** (keema, chili oil): every step shows the stove heat level, how often to stir, and a minute-by-minute "what to do when" timeline; timers chime when it is time to stir or change the heat
- **Servings and units**: scale every amount, switch between US and metric
- **Style and heat** (keema): switch Indian/Nepali style and Mild/Medium/Spicy; ingredients and steps update to match
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
- Background music: `audio/take-a-little.m4a`, “Take a Little” by Jaxson Blue, used with permission. Played by `music.js` on every page, with a pause/play button.
- Photos used with permission (files in `images/`):
  - `corn-salsa.jpg`: Kalejunkie
  - `keema.jpg`: WW (Weight Watchers), "Nepalese keema-style curry"
  - `keema-card.jpg`: Swasthi's Recipes
  - `keema-pan.jpg`: Tea for Turmeric
  - `chili-oil.jpg`: Nomadette
  - `chili-oil-card.jpg`: Planted With Katie
  - `chili-oil-bowl.jpg`: The Twin Cooking Project
  - `chili-oil-pan.jpg`: from Mohan's chili oil recipe document
- Home page grid corn salad photo: [Sagar Mahadik on Unsplash](https://unsplash.com/photos/a-close-up-of-a-salad-with-peppers-and-corn-W2ycFqUsxvY) (Unsplash License).
- Ingredient photos are hotlinked from Wikimedia Commons; each file page lists its author and license:
  [Fresh Sweet Corn](https://commons.wikimedia.org/wiki/File:Fresh_Sweet_Corn.jpg) ·
  [Corn on the cob](https://commons.wikimedia.org/wiki/File:Corn_on_the_cob_(sweet_corn).jpg) ·
  [Red onion](https://commons.wikimedia.org/wiki/File:Red_onion_cut.jpg) ·
  [Jalapeño](https://commons.wikimedia.org/wiki/File:Jalapenyo.jpg) ·
  [Lime](https://commons.wikimedia.org/wiki/File:Lime_-_whole_and_halved.jpg) ·
  [Cilantro](https://commons.wikimedia.org/wiki/File:Homemade_Grown_Coriandum_Sativum_(Cilantro).jpg)
- Keema photos, also from Wikimedia Commons:
  [Minced meat](https://commons.wikimedia.org/wiki/File:Minced_meat.jpg) ·
  [Onion](https://commons.wikimedia.org/wiki/File:Indian_Onion.jpg) ·
  [Chopped onions](https://commons.wikimedia.org/wiki/File:Chopped_Onions.JPG) ·
  [Tomatoes](https://commons.wikimedia.org/wiki/File:Tomatoes_plain_and_sliced.jpg) ·
  [Peas](https://commons.wikimedia.org/wiki/File:Green_pea_pod_8866.jpg) ·
  [Ginger](https://commons.wikimedia.org/wiki/File:-_Ginger_-.jpg) ·
  [Garlic](https://commons.wikimedia.org/wiki/File:Garlic_bulbs_and_cloves.jpg) ·
  [Green chilli](https://commons.wikimedia.org/wiki/File:Green_chilli.jpg) ·
  [Whole spices](https://commons.wikimedia.org/wiki/File:Indian_spices_with_labels_(garam_masala_components)_(49684333301).jpg) ·
  [Spices in an Indian kitchen](https://commons.wikimedia.org/wiki/File:Spices_in_an_Indian_kitchen.JPG) ·
  [Garam masala](https://commons.wikimedia.org/wiki/File:Garam_Masala_new_2008-1.jpg) ·
  [Timur](https://commons.wikimedia.org/wiki/File:Zanthoxylum_alatum_with_fruits.JPG)
- Chili oil ingredient photos from Wikimedia Commons:
  [Dried chillies](https://commons.wikimedia.org/wiki/File:Dried_chillies_in_Spice_Bazaar_Istanbul.jpg) ·
  [Chilli flakes](https://commons.wikimedia.org/wiki/File:2014_Dried_chilli_flakes.jpg) ·
  [Olive oil](https://commons.wikimedia.org/wiki/File:Bottle_of_olive_oil.jpg) ·
  [Lemon](https://commons.wikimedia.org/wiki/File:Lemon_-_whole_and_split.jpg) ·
  [Cumin](https://commons.wikimedia.org/wiki/File:Cumin_seed_whole.JPG) ·
  [Cardamom](https://commons.wikimedia.org/wiki/File:Black_and_green_cardamom.jpg)
- More ingredient photos from Wikimedia Commons (each file page lists author and license): [Cloves](https://commons.wikimedia.org/wiki/File:Cloves-spice.jpg) · [Indian bay leaf](https://commons.wikimedia.org/wiki/File:Indian_bay_leaf_-_tejpatta_-_indisches_Lorbeerblatt.jpg) · [Turmeric](https://commons.wikimedia.org/wiki/File:Turmeric-powder.jpg) · [Kashmiri chilli](https://commons.wikimedia.org/wiki/File:Kashmiri_Red_Chilli.JPG) · [Byadgi chili powder](https://commons.wikimedia.org/wiki/File:Byadgi_chili_powder.jpg) · [Coriander seeds](https://commons.wikimedia.org/wiki/File:Coriander_Seeds.jpg) · [Cumin](https://commons.wikimedia.org/wiki/File:Cumin.JPG) · [Salt](https://commons.wikimedia.org/wiki/File:Salt_Crystals.JPG) · [Sugar](https://commons.wikimedia.org/wiki/File:Bowl_of_white_sugar.jpg) · [Water](https://commons.wikimedia.org/wiki/File:Glass-of-water.jpg) · [Ghee](https://commons.wikimedia.org/wiki/File:Home_made_Ghee.jpg) · [Mustard oil](https://commons.wikimedia.org/wiki/File:Mustard_Oil_&_Seeds_-_Kolkata_2003-10-31_00537.JPG) · [Kasuri methi](https://commons.wikimedia.org/wiki/File:Dried_leaves_of_Fenugreek-Kasuri_Methi.jpg) · [Cinnamon](https://commons.wikimedia.org/wiki/File:Cinnamon_sticks_-_(1).jpg) · [Black cardamom](https://commons.wikimedia.org/wiki/File:Cardamomi_nigr.1.JPG) · [Green cardamom](https://commons.wikimedia.org/wiki/File:Green_Cardamom.JPG)
- Chili oil storage guidance: [Michigan State University Extension](https://www.canr.msu.edu/resources/michigan_fresh_garlic)
