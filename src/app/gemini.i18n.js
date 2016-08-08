(function () {
  'use strict';

  angular
    .module('gemini')
    .config(translationConfig);

  translationConfig.$inject = ['$translateProvider'];

  function translationConfig($translateProvider) {
    $translateProvider.translations('en', {
      HEADER: 'GEMINI Front-end Test',
      LANGUAGE: 'Language',
      ADD: 'Add',
      EDIT: 'Edit',
      DELETE: 'Delete',
      INFO: 'Info',
      SAVE: 'Save',
      CANCEL: 'Cancel',
      ACTIONS: 'Actions',
      TITLE: 'Title',
      NOTE: 'note',
      ID: 'Id',
      OK: 'Ok',
      NOTE_ID: 'Note id',
      ARE_YOU_SURE: 'Are you sure?',
      CONFIRM: 'Confirm',
      RECORD_WILL_NOT_BE_AVAILABLE: 'This record will not be available',
      ENTER_TITLE_HERE: 'Enter title here'
    });

    $translateProvider.translations('ru', {
      HEADER: 'Тестовое задание Джемини фронтенд',
      LANGUAGE: 'Язык',
      ADD: 'Добавить',
      EDIT: 'Редактировать',
      DELETE: 'Удалить',
      INFO: 'Детали',
      SAVE: 'Сохранить',
      CANCEL: 'Отмена',
      ACTIONS: 'Действия',
      TITLE: 'Заголовок',
      NOTE: 'заметку',
      ID: 'Айди',
      OK: 'Хорошо',
      NOTE_ID: 'Айди заметки',
      ARE_YOU_SURE: 'Вы уверены?',
      CONFIRM: 'Подтвердить',
      RECORD_WILL_NOT_BE_AVAILABLE: 'Эта запись больше не будет доступна',
      ENTER_TITLE_HERE: 'Введите заголовок'
    });

    $translateProvider.preferredLanguage('en');
  }
})();
