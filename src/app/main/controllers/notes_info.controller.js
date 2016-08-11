(function () {
  'use strict';

  angular
    .module('gemini')
    .controller('NotesInfoController', NotesInfoController);

  NotesInfoController.$inject = ['$modalInstance', 'note'];

  function NotesInfoController($modalInstance, note) {
    var vm = this;

    vm.note = note;
    vm.close = function () {
      $modalInstance.close();
    };
  }
})();
