var MovieController = {
  get: function () {
    if (App.isOnline()) {
      MovieModel.fetch(function (movies) {
        MovieController.syn(movies);
        MovieView.renderList(movies);
      }, function (error) {
        console.log('error ; ', error);
      });
    }else{
      MovieOfflineModel.fetchAll(function(oldMovies){
        var movies = $.map(oldMovies, function(movie){
          return {
            name: movie.name()
          };
        });
        MovieView.renderList(movies);
      });
    }
  },
  syn: function (movies) {
    MovieOfflineModel.fetchAll(function (oldMovies) {
      MovieOfflineModel.update(oldMovies, movies);
    });
  }
};