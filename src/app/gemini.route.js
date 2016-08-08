(function() {
  'use strict';

  angular
    .module('gemini')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/views/notes.html',
        controller: 'NotesController',
        controllerAs: 'notesCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
