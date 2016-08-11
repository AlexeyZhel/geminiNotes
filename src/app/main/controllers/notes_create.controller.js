(function () {
  'use strict';

  angular
    .module('gemini')
    .controller('NotesCreateEditController', NotesCreateEditController);

  NotesCreateEditController.$inject = ['$modalInstance', 'note'];

  function NotesCreateEditController($modalInstance, note) {
    var vm = this;

    vm.initialNote = note;
    vm.note = { id: vm.initialNote.id, title: vm.initialNote.title };

    vm.save = function () {
      vm.initialNote.title = vm.note.title;
      $modalInstance.close(vm.initialNote);
    };

    vm.cancel = function () {
      $modalInstance.close();
    };
  }
})();
