Feature('Customer Review');

Before(({ I }) => {
    I.amOnPage('/');
  });

Scenario('Customer Review', async ({ I }) => {
    I.waitForElement('.card-content-title a');
    I.seeElement('.card-content-title');
    I.click(locate('.card-content-title a').first());

    I.seeElement('.form-review form');
    I.fillField('inputName', 'test');
    I.fillField('inputReview', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique. ');
    I.click('#submit-review');
});
