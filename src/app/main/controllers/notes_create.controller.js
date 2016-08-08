(function () {
  'use strict';

  angular
    .module('gemini')
    .controller('NotesCreateEditController', NotesCreateEditController);

  NotesCreateEditController.$inject = ['$modalInstance', 'note', '$translate'];

  function NotesCreateEditController($modalInstance, note, $translate) {
    var vm = this;

    $translate(['SAVE', 'CANCEL', 'TITLE', 'ADD', 'EDIT', 'NOTE', 'ENTER_TITLE_HERE']).then(function (translations) {
      vm.save_tr = translations.SAVE;
      vm.cancel_tr = translations.CANCEL;
      vm.title_tr = translations.TITLE;
      vm.add_tr = translations.ADD;
      vm.edit_tr = translations.EDIT;
      vm.note_tr = translations.NOTE;
      vm.enter_title_here_tr = translations.ENTER_TITLE_HERE;
    }, function (translationIds) {
      vm.save_tr = translationIds.save_tr;
      vm.cancel_tr = translationIds.cancel_tr;
      vm.title_tr = translationIds.title_tr;
      vm.add_tr = translationIds.add_tr;
      vm.edit_tr = translationIds.edit_tr;
      vm.note_tr = translationIds.note_tr;
      vm.enter_title_here_tr = translationIds.enter_title_here_tr;
    });

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
