function MovieView(film) {
  this.film = film;
  this.element = document.createElement("div");
  this.cover = document.createElement("div");
  this.cover.classList.add("player__section");
  this.cover.innerHTML = `
   <div class="player__container" ><img class="player__img" src="${this.film.srcImage}" alt="img"></div>
<div class="player__options"> 
<div class="player__description--flex">
  <div class="player__movieTitle" >${this.film.TitleAlt}</div>
   <div class="player__movieRating">RunTime: ${this.film.RunTime}
  </div>
  <div class="player__movieGanres">Genred: ${this.film.Genred}</div> 
  <div class="player__movieDescription" >${this.film.Description}</div>
</div>

`;
  this.element.append(this.cover);

  MovieView.prototype.getElement = function() {
    console.log("GET IS HERE", this.element);
    return this.element;
  };

  MovieView.prototype.render = function(container) {
    if (container.children["1"]) {
      container.removeChild(container.children["1"]);
    }
    container.append(this.element);
  };
  // MovieView.prototype.clear = function(container) {
  //   if (container.children["1"]) {
  //     container.removeChild(container.children["1"]);
  //   }
  // };
}
