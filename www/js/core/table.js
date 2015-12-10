function createTables() {
  Movie = persistence.define('movies', {
    movie_id: "INT",
    name: "TEXT",
    image: "TEXT",
    description: "TEXT"
  });
}