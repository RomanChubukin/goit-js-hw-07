import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

(function () {
    const markup = galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
    </li>`).join("");
    list.insertAdjacentHTML("beforeend", markup)
})();

list.addEventListener("click", onClick);

function onClick(evt) { 
    evt.preventDefault();
    }
const lightbox = new SimpleLightbox('.gallery a');
    lightbox.options.captionsData = "alt";
    lightbox.options.captionDelay = 250;