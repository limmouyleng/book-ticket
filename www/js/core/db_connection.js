function connectionDB(dbName, size) {
  persistence.store.websql.config(
      persistence, dbName, '0.0.1', 'Book ticket database', size, 0, 2);
  persistence.schemaSync();
}