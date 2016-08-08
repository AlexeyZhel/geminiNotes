(function () {
  'use strict';

  angular
    .module('gemini')
    .controller('NotesRemoveController', NotesRemoveController);

  NotesRemoveController.$inject = ['note', '$modalInstance', '$translate'];

  function NotesRemoveController(note, $modalInstance, $translate) {
    var vm = this;

    vm.confirm = function () {
      $modalInstance.close(note);
    };

    vm.cancel = function () {
      $modalInstance.close();
    };

    $translate(['ARE_YOU_SURE', 'CONFIRM', 'RECORD_WILL_NOT_BE_AVAILABLE', 'CANCEL']).then(function (translations) {
      vm.cancelTr = translations.CANCEL;
      vm.areYouSureTr = translations.ARE_YOU_SURE;
      vm.confirmTr = translations.CONFIRM;
      vm.recordNotAvailableTr = translations.RECORD_WILL_NOT_BE_AVAILABLE;
    }, function (translationIds) {
      vm.cancelTr = translationIds.cancelTr;
      vm.areYouSureTr = translationIds.areYouSureTr;
      vm.confirmTr = translationIds.confirmTr;
      vm.recordNotAvailableTr = translationIds.recordNotAvailableTr;
    });
  }
})();
