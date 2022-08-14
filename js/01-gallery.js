import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

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
const galleryItemEl = document.querySelector(".gallery__item");
console.log(galleryItemEl);
// const galleryLinkEl = galleryItemEl.children.join("");
// console.log(galleryLinkEl);

galleryItemEl.addEventListener("click", (event) => {
  //   const color = getRandomHexColor();
  //   bodyEl.style.backgroundColor = color;
  //   colorEl.textContent = color;
  event.preventDefault();
  galleryItemEl.add.classList = "modal";
});

// galleryItemEl
// galleryItemEl.forEach((item) => item.preventDefault());

// function onFormSubmit(event) {
//     event.preventDefault();

//     const emailValue = event.currentTarget.elements.email.value;
//     const passwordValue = event.currentTarget.elements.password.value;
