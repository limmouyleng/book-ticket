var MovieController = {
  get: function () {
    MovieModel.fetch(function (data) {
      MovieModel.movies = data;
      MovieView.renderList();
    }, function (error) {
      console.log('error ; ', error);
    });
  }
};