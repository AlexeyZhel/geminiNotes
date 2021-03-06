(function () {
  'use strict';

  angular
    .module('gemini')
    .controller('NotesController', NotesController);

  NotesController.$inject = ['Note', '$modal', '$translate', 'geminiConfig'];

  function NotesController(Note, $modal, $translate, geminiConfig) {
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
      defineGridTranslations();
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

    function defineGridTranslations() {
      $translate(['ACTIONS', 'TITLE', 'ID'])
        .then(function (translations) {
          var actionsTr = translations.ACTIONS,
              titleTr = translations.TITLE,
              idTr = translations.ID;

          defineGrid(idTr, titleTr, actionsTr);
        });
    }

    function getNotes() {
      Note.query(function(data) {
        vm.notes = data;
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
      Note.delete({ id: record.id }, function() {
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
        Note.update({ id: record.id }, record, function() {
          getNotes();
        });
      } else {
        Note.save(record, function() {
          getNotes();
        });
      }
    }

    function showInfo(note) {
      Note.get({ id: note.id }, function(noteInfo) {
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
