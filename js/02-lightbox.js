import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems

  .map(
    (galleryItem) =>
      `<a class="gallery__item" href="${galleryItem.original}">
            <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
        </a>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

// ===========================================================================

new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
