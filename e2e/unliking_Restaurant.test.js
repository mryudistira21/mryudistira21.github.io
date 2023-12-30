const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('Batal menyukai restoran', async ({ I }) => {
    I.amOnPage('/');
    
    I.waitForElement('.card-content-title');
    I.seeElement('.card-content-title');
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
    
    I.waitForElement('.card');
    I.seeElement('.card');
    const likedCardName = await I.grabTextFrom('.card-content-title');
    I.click(likedCardName);
    
    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');
    
    I.amOnPage('/#/favorite');
    I.waitForElement('#explore-restaurant-list');
    I.seeElement('#explore-restaurant-list');
});
