(function () {
  'use strict';

  angular
    .module('gemini')
    .controller('NotesCreateEditController', NotesCreateEditController);

  NotesCreateEditController.$inject = ['$modalInstance', 'note', '$translate'];

  function NotesCreateEditController($modalInstance, note, $translate) {
    var vm = this;

    $translate(['SAVE', 'CANCEL', 'TITLE', 'ADD', 'EDIT', 'NOTE', 'ENTER_TITLE_HERE']).then(function (translations) {
      vm.saveTr = translations.SAVE;
      vm.cancelTr = translations.CANCEL;
      vm.titleTr = translations.TITLE;
      vm.addTr = translations.ADD;
      vm.editTr = translations.EDIT;
      vm.noteTr = translations.NOTE;
      vm.enterTitleHereTr = translations.ENTER_TITLE_HERE;
    }, function (translationIds) {
      vm.saveTr = translationIds.saveTr;
      vm.cancelTr = translationIds.cancelTr;
      vm.titleTr = translationIds.titleTr;
      vm.addTr = translationIds.addTr;
      vm.editTr = translationIds.editTr;
      vm.noteTr = translationIds.noteTr;
      vm.enterTitleHereTr = translationIds.enterTitleHereTr;
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
