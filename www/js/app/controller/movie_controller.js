var MovieController = {
  get: function () {
    MovieModel.fetch(function (movies) {
      MovieController.syn(movies);
      MovieView.renderList(movies);
    }, function (error) {
      console.log('error ; ', error);
    });
  },
  syn: function (movies) {
    MovieOfflineModel.fetchAll(function (oldMovies) {
      MovieOfflineModel.update(oldMovies, movies);
    });
  }
};