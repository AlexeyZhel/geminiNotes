(function () {
  'use strict';

  describe('controllers', function () {
    var vm;

    beforeEach(module('gemini'));
    beforeEach(inject(function (_$controller_) {
      vm = _$controller_('NotesController');
    }));

    it('should have english language selected as default', function () {
      expect(vm.selectedLanguage.key).toEqual('en');
    });

    it('should have grid options defined', function () {
      expect(vm.gridOptions).toBeDefined();
    });

  });
})();
