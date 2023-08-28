// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery")

galleryList.style.listStyle = "none"

const renderList = (arr) => arr.map(({ original, preview, description }) =>
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

galleryList.insertAdjacentHTML("beforeend", renderList(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
