var URL = "http://resourcemap-sea.instedd.org/";
var ENDPOINT = "http://resourcemap-sea.instedd.org/api/";
var App = {
  DB_SIZE: 5 * 1024 * 1024, //5MB
  DB_NAME: 'bookticket_db',
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  resetDB: function(){
    persistence.reset();
    persistence.schemaSync();
  },
  onDeviceReady: function () {
    MovieController.get();
    connectionDB(App.DB_NAME, App.DB_SIZE);
    createTables();
  }
};

App.initialize();