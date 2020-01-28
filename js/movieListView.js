var playerModal = document.querySelector(".player__modal");
var closeModal = document.querySelector(".playerModal__close");
var overlayModal = document.querySelector(".player__owerlay");

function MovieListView(movie) {
  this.movie = movie;
  this.element = document.createElement("div");
  this.element.classList.add("eventCover");
  this.cover = document.createElement("div");
  this.cover.classList.add("content__section");
  this.cover.innerHTML = `<div class="content__imgWrap"><img class="content__img" src="${this.movie.srcImage}" alt="img"></div>
      <div class="content__info">
        <div class="content__info--flex">
        <div class="content__title">${this.movie.TitleAlt}</div>
        <div class="content__likes content--padding"><img src="img/iconLikes.png" alt="icon"><span>3632</span></div>
        <div class="content__coments content--padding"><img src="img/iconComments.png" alt="icon"><span>221</span></div>
        <div class="content__rating">${this.movie.Genred}
        </div>
        <div class="content__date">RunTime: ${this.movie.RunTime}</div>
      </div>
      </div>`;

  this.element.addEventListener("click", function(event) {
    var el = new MovieView(movie);
    console.log(el);
    el.render(document.querySelector(".player__modal"));
    playerModal.classList.remove("player__modal--hidden");
    overlayModal.classList.remove("player__modal--hidden");
  });
  this.element.append(this.cover);
}
function hideModal() {
  // var el = new MovieView(movie);
  // el.clear(document.querySelector(".player__modal"));
  playerModal.classList.add("player__modal--hidden");
  overlayModal.classList.add("player__modal--hidden");
}

closeModal.addEventListener("click", hideModal);

MovieListView.prototype.getElement = function() {
  return this.element;
};

MovieListView.prototype.render = function(container) {
  container.append(this.element);
};
