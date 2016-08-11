(function () {
  'use strict';

  angular
    .module('gemini')
    .factory('Note', notesModel);

  notesModel.$inject = ['$resource'];

  function notesModel($resource) {
    return $resource("http://private-9aad-note10.apiary-mock.com/notes/:id", null,
      {
        'update': { method:'PUT' }
      });
  }
})();


