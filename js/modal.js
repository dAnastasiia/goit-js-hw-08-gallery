const ul = document.querySelector(".js-gallery");
const modal = document.querySelector(".lightbox");
const modalImg = document.querySelector(".lightbox__image");

ul.addEventListener("click", onImgClick);
modal.addEventListener("click", onBtnClick);

function onImgClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  modal.classList.add("is-open");

  modalImg.src = event.target.dataset.source;
  modalImg.alt = event.target.alt;
}

function onBtnClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  modal.classList.remove("is-open");
  modalImg.src = "";
}
