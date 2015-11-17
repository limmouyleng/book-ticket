var MovieController = {
  get: function () {
    MovieModel.fetch(function (movies) {
      MovieView.renderList(movies);
    }, function (error) {
      console.log('error ; ', error);
    });
  }
};