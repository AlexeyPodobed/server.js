var addFilmModal = document.querySelector(".newFilm__modal");
var openAddFilmModal = document.querySelector(".content__sectionNew");
var closeAddFilmModal = document.querySelector(".newFilm__modal--close");

var saveNewFilm = document.querySelector(".newFilm__button");

function openAddModal() {
  addFilmModal.classList.remove("player__modal--hidden");
}
function closeAddModal() {
  addFilmModal.classList.add("player__modal--hidden");
}
openAddFilmModal.addEventListener("click", openAddModal);
closeAddFilmModal.addEventListener("click", closeAddModal);

var filmTitle = document.querySelector(".newFilm__title");
var filmRating = document.querySelector(".newFilm__rating");
var filmRunTime = document.querySelector(".newFilm__runTime");
var filmDescription = document.querySelector(".newFilm__description");

var filmTitleView = document.querySelector(".newFilm__title-view");
var filmRatingView = document.querySelector(".newFilm__rating-view");
var filmRunTimeView = document.querySelector(".newFilm__runTime-view");
var filmDescriptionView = document.querySelector(".newFilm__description-view");

var showButton = document.querySelector(".newFilm__modal--view");
var editButton = document.querySelector(".newFilm__modal--edit");

function addInfo() {
  filmTitleView.innerHTML = filmTitle.value;
  filmRatingView.innerHTML = filmRating.value;
  filmRunTimeView.innerHTML = filmRunTime.value;
  filmDescriptionView.innerHTML = filmDescription.value;

  filmTitleView.classList.remove("hidden");
  filmRatingView.classList.remove("hidden");
  filmRunTimeView.classList.remove("hidden");
  filmDescriptionView.classList.remove("hidden");
  editButton.classList.remove("hidden");

  filmTitle.classList.add("hidden");
  filmRating.classList.add("hidden");
  filmRunTime.classList.add("hidden");
  filmDescription.classList.add("hidden");
  showButton.classList.add("hidden");
}
showButton.addEventListener("click", addInfo);

function editInfo() {
  filmTitleView.classList.add("hidden");
  filmRatingView.classList.add("hidden");
  filmRunTimeView.classList.add("hidden");
  filmDescriptionView.classList.add("hidden");
  editButton.classList.add("hidden");

  filmTitle.classList.remove("hidden");
  filmRating.classList.remove("hidden");
  filmRunTime.classList.remove("hidden");
  filmDescription.classList.remove("hidden");
  showButton.classList.remove("hidden");
}
editButton.addEventListener("click", editInfo);
