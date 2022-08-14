import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

const markup = galleryItems
  // event.preventDefault();
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
const galleryItemEl = document.querySelectorAll(".gallery__item");
console.log(galleryItemEl);
// galleryItemEl
// galleryItemEl.forEach((item) => item.preventDefault());
