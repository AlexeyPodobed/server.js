var moviesArr = [];

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/films", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send();

xhr.addEventListener("load", function() {
  moviesArr = JSON.parse(xhr.response).list;
  for (let i = 0; i < moviesArr.length; i++) {
    var movie = new MovieListView(moviesArr[i]);
    movie.render(document.querySelector(".content__wrap"));
  }
});

// var xhr = new XMLHttpRequest();
// var data = {
//   movie: data
// };
// xhr.open("POST", "http://localhost:3000/films", true);
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.send(data);
