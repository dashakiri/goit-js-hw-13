import { galleryContainer, lightbox, lightboxOverlay, lightboxImage } from "./refs";

lightboxOverlay.addEventListener('click', onCloseLightbox);
galleryContainer.addEventListener('click', onLightboxClick);

function onLightboxClick(e) {
    e.preventDefault();

    const galleryImage = e.target;
    
    if (galleryImage.nodeName !== 'IMG') {
        return;
    };   

    lightboxImage.src = galleryImage.dataset.source;
    lightboxImage.alt = galleryImage.alt;

    lightbox.classList.add('is-open');
    
    window.addEventListener('keydown', onEscapeKeyPress);

}

function onCloseLightbox() {
    lightbox.classList.remove('is-open');

    window.removeEventListener('keydown', onEscapeKeyPress);
   
    lightboxImage.src = '';
    lightboxImage.alt = '';
};

function onEscapeKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';

    if (ESC_KEY_CODE === event.code) {
        onCloseLightbox(event);
    };
    return;
};



