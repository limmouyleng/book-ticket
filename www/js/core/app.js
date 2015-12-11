var URL = "http://resourcemap-sea.instedd.org/";
var ENDPOINT = "http://resourcemap-sea.instedd.org/api/";
var App = {
  DB_SIZE: 10 * 1024 * 1024, //10MB
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
  isOnline: function(){
    var online = false;
    if (navigator.connection) {
      online = (navigator.connection.type !== Connection.NONE);
      return online;
    }
    online = navigator.onLine; //browser
    return online;
  },
  onDeviceReady: function () {
    connectionDB(App.DB_NAME, App.DB_SIZE);
    createTables();
    MovieController.get();
  }
};

App.initialize();