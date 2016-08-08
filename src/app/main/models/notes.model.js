(function () {
  'use strict';

  angular
    .module('gemini')
    .service('Note', notesModel);

  notesModel.$inject = ['Restangular'];

  function notesModel(Restangular) {
    Restangular.setBaseUrl('http://private-9aad-note10.apiary-mock.com/');
    return Restangular.service('notes');
  }

})();


