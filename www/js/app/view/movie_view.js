var MovieView = {
  renderList: function (movies) {
    AppTemplate.process("movie.html", {movies: movies}, function (content) {
      $("#page-movies").html(content);
      $("#page-movies").trigger('create');
    });
  }
};