(function() {
  'use strict';

  angular
    .module('gemini')
    .constant('geminiConfig', {
      'gridHeight': 90,
      'languages': [
        {
          key: 'en',
          name: 'English'
        },
        {
          key: 'ru',
          name: 'Русский'
        }
      ]
    });

})();
