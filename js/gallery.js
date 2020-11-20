import items from "./gallery-items.js";

const ul = document.querySelector(".js-gallery");

const makeGallery = function (array) {
  const galleryElem = array.map((arr) => {
    const previewImage = arr.preview;
    const largeImage = arr.original;
    const description = arr.description;
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    img.classList.add("gallery__image");
    img.setAttribute("src", previewImage);
    img.dataset.source = largeImage;
    img.setAttribute("alt", description);

    a.classList.add("gallery__link");
    a.setAttribute("href", largeImage);

    li.classList.add("gallery__item");

    a.append(img);
    li.append(a);
    return li;
  });
  ul.append(...galleryElem);
};

makeGallery(items);
