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
    // window.addEventListener('keydown', onArrowLeft);
    // window.addEventListener('keydown', onArrowRight);


    console.log(galleryImage)

}

function onCloseLightbox() {
    lightbox.classList.remove('is-open');

    window.removeEventListener('keydown', onEscapeKeyPress);
    // window.removeEventListener('keydown', onArrowLeft);
    // window.removeEventListener('keydown', onArrowRight);

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



