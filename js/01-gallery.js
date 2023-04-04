import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

    (function () {
        const markup = galleryItems.map(({ preview, original, description }) =>
            `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");
        
        list.insertAdjacentHTML("beforeend", markup);
    })();
    
list.addEventListener("click", onClick)

function onClick(event) { 
    event.preventDefault()
    console.dir(event.target)
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}">
    </div>
`)

    instance.show()
    document.addEventListener("keydown", closeModal)
    function closeModal(evt) {
    console.log(evt);
    if (evt.code === "Escape") { 
        instance.close();
        document.removeEventListener("keydown",closeModal)
    }
}

}


