'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    browser.waitForAngular();
  });

  it('should have add button on page', function() {
    expect(element(by.id('add-btn')).isPresent()).toBe(true);
  });

  it('should show modal after clicking add btn', function () {
    element(by.id('add-btn')).click();
    expect(element(by.css('.modal-dialog')).isPresent()).toBe(true);
  });

});
