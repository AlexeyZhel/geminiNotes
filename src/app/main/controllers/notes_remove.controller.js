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
      vm.cancel_tr = translations.CANCEL;
      vm.are_you_sure_tr = translations.ARE_YOU_SURE;
      vm.confirm_tr = translations.CONFIRM;
      vm.record_not_available_tr = translations.RECORD_WILL_NOT_BE_AVAILABLE;
    }, function (translationIds) {
      vm.cancel_tr = translationIds.cancel_tr;
      vm.are_you_sure_tr = translationIds.are_you_sure_tr;
      vm.confirm_tr = translationIds.confirm_tr;
      vm.record_not_available_tr = translationIds.record_not_available_tr;
    });
  }
})();
