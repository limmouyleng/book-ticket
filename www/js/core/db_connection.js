function connectionDB(dbName, size) {
  if (window.openDatabase || window.sqlitePlugin) {
    persistence.store.websql.config(
        persistence, dbName, '0.0.1', 'Book ticket database', size, 0, 2);
    persistence.schemaSync();
  }else
    alert("Your device must support database connection")
}