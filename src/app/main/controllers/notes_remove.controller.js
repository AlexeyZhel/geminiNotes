(function () {
  'use strict';

  angular
    .module('gemini')
    .controller('NotesRemoveController', NotesRemoveController);

  NotesRemoveController.$inject = ['note', '$modalInstance'];

  function NotesRemoveController(note, $modalInstance) {
    var vm = this;

    vm.confirm = function () {
      $modalInstance.close(note);
    };

    vm.cancel = function () {
      $modalInstance.close();
    };
  }
})();
