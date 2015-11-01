var MovieView = {
  renderList: function () {
    var movies = MovieModel.getMovies();
    var source = $("#template-page-movies").html();
    var template = Handlebars.compile(source);
    $("#page-movies").append(template({movies: movies}));
  }
};