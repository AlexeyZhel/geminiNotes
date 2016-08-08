(function () {
  'use strict';

  angular
    .module('gemini')
    .controller('NotesInfoController', NotesInfoController);

  NotesInfoController.$inject = ['$modalInstance', 'note', '$translate'];

  function NotesInfoController($modalInstance, note, $translate) {
    var vm = this;

    vm.note = note;
    vm.close = function () {
      $modalInstance.close();
    };

    $translate(['OK', 'NOTE_ID']).then(function (translations) {
      vm.okTr = translations.OK;
      vm.noteIdTr = translations.NOTE_ID;
    }, function (translationIds) {
      vm.okTr = translationIds.okTr;
      vm.noteIdTr = translationIds.noteIdTr;
    });
  }
})();
