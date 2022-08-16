// // =======================================================================================================
// ===============================================V1========================================================
// =========================================================================================================
// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// // console.log(galleryItems);

// const galleryEl = document.querySelector(".gallery");

// const markup = galleryItems

//   .map(
//     (galleryItem) =>
//       `<div class="gallery__item">
//             <a class="gallery__link" href='${galleryItem.original}'>
//                 <img
//                     class="gallery__image"
//                     src='${galleryItem.preview}'
//                     data-source='${galleryItem.original}'
//                     alt='${galleryItem.description}'
//                 />
//             </a>
//         </div>`
//   )
//   .join("");

// galleryEl.insertAdjacentHTML("beforeend", markup);

// // =====================================Click==========================================================

// galleryEl.addEventListener("click", onClick);

// function onClick(evt) {
//   evt.preventDefault();

//   const imageClassBool = evt.target.classList.contains("gallery__image");
//   if (imageClassBool) {
//     const originalPhotoHref = evt.target.dataset.source;
//     const instance = basicLightbox.create(`
//     <img src="${originalPhotoHref}" width="800" height="600">
// `);
//     instance.show();
//     // instance.close(() => console.log("lightbox більше не видно"));
//   } else return;
//   // ++============================================
//   // onClose: (instance) => {
//   // instance.close();
//   // instance.close(() => console.log("lightbox більше не видно"));

//   // document.addEventListener("keydown", onEscRemoveLightbox);
//   // if (basicLightboxEl && event.key === "Escape") {
//   // basicLightboxEl.remove();
//   // } else return;
//   // };
//   // onClose();
// }

// // ========================Escape============================================

// document.addEventListener("keydown", onEscRemoveLightbox);

// function onEscRemoveLightbox(event) {
//   const basicLightboxEl = document.querySelector(".basicLightbox");

//   if (basicLightboxEl && event.key === "Escape") {
//     basicLightboxEl.remove();
//   } else return;
// }
// =======================================================================================================
// ===============================================V2========================================================
// =======================================================================================================

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

// =====================================Click/Escape==========================================================

galleryEl.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const originalPhotoHref = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${originalPhotoHref}" width="800" height="600">
`);

  const imageClassBool = evt.target.classList.contains("gallery__image");
  if (imageClassBool) {
    instance.show();
  } else return;

  document.addEventListener("keydown", onEscRemoveLightbox);

  function onEscRemoveLightbox(event) {
    if (event.key === "Escape") {
      // instance.close(() => console.log("lightbox більше не видно"));
      instance.close();
    } else return;
  }
}
