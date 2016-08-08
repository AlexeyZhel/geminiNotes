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
      vm.ok_tr = translations.OK;
      vm.note_id_tr = translations.NOTE_ID;
    }, function (translationIds) {
      vm.ok_tr = translationIds.ok_tr;
      vm.note_id_tr = translationIds.note_id_tr;
    });
  }
})();
