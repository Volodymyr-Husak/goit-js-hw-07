import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems

  .map(
    (galleryItem) =>
      `<div class="gallery__item">
            <a class="gallery__link" href='${galleryItem.original}'>
                <img
                    class="gallery__image"
                    src='${galleryItem.preview}'
                    data-source='${galleryItem.original}'
                    alt='${galleryItem.description}'
                />
            </a>
        </div>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

// ===============================================================================================

galleryEl.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const originalPhotoHref = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${originalPhotoHref}" width="800" height="600">
`);

  instance.show();
}
