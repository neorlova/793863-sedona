
var link = document.querySelector(".button-search");

var popup = document.querySelector(".search-form")

popup.classList.remove("modal-show");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});
