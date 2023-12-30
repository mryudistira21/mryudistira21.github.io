const assert = require('assert');

Feature('Liking Restaurant');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('menunjukan restoran favorit kosong', ({ I }) => {
  I.seeElement('#explore-restaurant-list');
  I.see('Tidak ada restoran favorit', '.restaurant-item__not__found');
});

Scenario('menyukai satu restoran', async ({ I }) => {
  I.see('Tidak ada restoran favorit', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.card-content-title a');
  I.seeElement('.card-content-title a');
  
  const firstRestaurant = locate('.card-content-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card');
  I.seeElement('.card');
  const likedRestaurantName = await I.grabTextFrom('.card-content-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
