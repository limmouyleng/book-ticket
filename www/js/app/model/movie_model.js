var MovieModel = {
  movies: [],
  setMovies: function () {
    MovieModel.movies.push({
      "id": "1",
      "name": "Heart Attack",
      "img": "img/movie/heart-attack.jpg",
      "desription": "Thai Movie"
    }, {
      "id": "2",
      "name": "Pan",
      "img": "img/movie/pan.png",
      "desription": "Fighting Movie"
    });
  },
  getMovies: function(){
    return MovieModel.movies;
  }
};