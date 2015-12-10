var MovieOfflineModel = {
  add: function (movie) {
    movieParam = {
      name: movie.name,
      movie_id: movie.id,
      description: movie.description
    };
    persistence.add(new Movie(movieParam));
    persistence.flush();
  },
  update: function (oldMovies, newMovies) {
    $.map(newMovies, function (newMovie) {
      var isNew = true;
      $.each(oldMovies, function (i, oldMovie) {
        if (oldMovie.movie_id() == newMovie.id) {
          console.log(" have id match");
          isNew = false;
          oldMovie.name(newMovie.name);
          oldMovie.description(newMovie.description);
          oldMovie.image(newMovie.image);
          return false;
        } else {
          isNew = true;
        }
      });
      if (isNew) {
        console.log('newMovie : ', newMovie);
        MovieOfflineModel.add(newMovie);
      }
    });
    persistence.flush();
  },
  fetchAll: function (callback) {
    Movie.all().list(callback);
  }
};