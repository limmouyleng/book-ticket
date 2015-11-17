var MovieModel = {
  movies: [],
  getMovies: function () {
    return MovieModel.movies;
  },
  fetch: function (successCallback, errorCallback) {
    $.ajax({
      type: "GET",
      datatype: "JSON",
      url: ENDPOINT + "collections?auth_token=yqqUswK2sTaWWxXg38nM",
      crossDomain: true,
      success: successCallback,
      error: errorCallback
    });
  }
};