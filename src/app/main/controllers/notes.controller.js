(function () {
  'use strict';

  angular
    .module('gemini')
    .controller('NotesController', NotesController);

  NotesController.$inject = ['Note', '$modal', 'Restangular', '$translate', 'geminiConfig'];

  function NotesController(Note, $modal, Restangular, $translate, geminiConfig) {
    var vm = this;

    vm.changeLanguage = changeLanguage;

    vm.gridHeight = geminiConfig.gridHeight;
    vm.languages = geminiConfig.languages;
    vm.selectedLanguage = vm.languages[0];

    vm.addNote = function () {
      vm.openModal({});
    };
    vm.editNote = function (note) {
      vm.openModal(note);
    };

    vm.openModal = openModal;
    vm.removeNote = removeNote;
    vm.submitRecord = submitRecord;
    vm.showInfo = showInfo;

    defineGrid();
    vm.changeLanguage();
    getNotes();

    function changeLanguage() {
      $translate.use(vm.selectedLanguage.key);
      defineTranslations();
    }

    function defineGrid(id, title, actions) {
      vm.gridOptions = {
        data: 'notesCtrl.notes',
        enableColumnMenus: false,
        enableHorizontalScrollbar: 0,
        enableVerticalScrollbar: 0,
        appScopeProvider: vm,
        columnDefs: [
          {
            name: 'id',
            displayName: id,
            cellClass: 'grid-align-center',
            width: 60
          },
          {
            name: 'title',
            displayName: title
          },
          {
            name: 'actions',
            enableSorting: false,
            width: 300,
            displayName: actions,
            cellClass: 'grid-align-center',
            cellTemplate: 'app/main/views/actions.html'
          }
        ]
      };
    }

    function defineTranslations() {
      $translate(['HEADER', 'ADD', 'EDIT', 'DELETE', 'INFO', 'ACTIONS', 'TITLE', 'ID', 'LANGUAGE'])
        .then(function (translations) {
        vm.headerTr = translations.HEADER;
        vm.languageTr = translations.LANGUAGE;
        vm.addTr = translations.ADD;
        vm.editTr = translations.EDIT;
        vm.deleteTr = translations.DELETE;
        vm.infoTr = translations.INFO;
        vm.actionsTr = translations.ACTIONS;
        vm.titleTr = translations.TITLE;
        vm.idTr = translations.ID;
        defineGrid(vm.idTr, vm.titleTr, vm.actionsTr);
      }, function (translationIds) {
        vm.headerTr = translationIds.headerTr;
        vm.languageTr = translationIds.languageTr;
        vm.addTr = translationIds.addTr;
        vm.editTr = translationIds.editTr;
        vm.deleteTr = translationIds.deleteTr;
        vm.infoTr = translationIds.infoTr;
        vm.actionsTr = translationIds.actionsTr;
        vm.titleTr = translationIds.titleTr;
        vm.idTr = translationIds.idTr;
      });
    }

    function getNotes() {
      Note.getList().then(function (notes) {
        vm.notes = notes;
        setHeight();
      });
    }

    function openModal(note) {
      var modalInstance = $modal.open({
        templateUrl: 'app/main/views/modal.html',
        controller: 'NotesCreateEditController',
        controllerAs: 'notesCrEdCtrl',
        resolve: {
          note: function () {
            return note;
          }
        }
      });

      modalInstance.result.then(function (record) {
        if (record) {
          vm.submitRecord(record);
        }
      });
    }

    function removeRecord(record) {
      record.remove().then(function () {
        getNotes();
      });
    }

    function removeNote(note) {
      var modalInstance = $modal.open({
        templateUrl: 'app/main/views/confirm_modal.html',
        controller: 'NotesRemoveController',
        controllerAs: 'notesRmCtrl',
        resolve: {
          note: function () {
            return note;
          }
        }
      });

      modalInstance.result.then(function (record) {
        if (record) {
          removeRecord(record);
        }
      });
    }

    function submitRecord(record) {
      if (record.id) {
        record.save().then(function () {
          getNotes();
        });
      } else {
        Note.post(record).then(function () {
          getNotes();
        });
      }
    }

    function showInfo(note) {
      Restangular.one('notes', note.id).get().then(function (noteInfo) {
        $modal.open({
          templateUrl: 'app/main/views/info_modal.html',
          controller: 'NotesInfoController',
          controllerAs: 'notesInfCtrl',
          resolve: {
            note: function () {
              return noteInfo;
            }
          }
        });
      });
    }

    function setHeight() {
      vm.gridHeight = ((vm.notes.length * 30) + 30);
    }
  }
})();
