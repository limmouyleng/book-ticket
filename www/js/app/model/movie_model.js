var MovieModel = {
  movies: [],
  getMovies: function () {
    return MovieModel.movies;
  },
  fetch: function (successCallback, errorCallback) {
    $.ajax({
      type: "GET",
      datatype: "JSON",
      url: ENDPOINT + "collections?auth_token=Ak6pBB2TsE42xdHXvxz8",
      crossDomain: true,
      success: successCallback,
      error: errorCallback
    });
  }
};