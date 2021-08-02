import Notiflix from 'notiflix';
import './js/lightbox';
import { inputRef, searchButton, galleryContainer } from './js/refs';
import ImageAPIService from "./js/API-get";
import imageCardTemplate from "./templates/image-card.hbs";
import infiniteScroll from "./js/infinite-scrol";

inputRef.addEventListener('change', onSearch);
searchButton.addEventListener('click', onSearchButtonClick);
export let newImage = new ImageAPIService();

function onSearch(e) {
    clearInterface();
    const searchQuery = e.currentTarget.value.trim();
    newImage = new ImageAPIService(searchQuery);
    newImage.getImages()
        .then(data => {
            console.log(data)
            if (data.length === 0) {
                Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
                throw new Error(error);
            };
            
            imageCardRender(data);
        });
}

function onSearchButtonClick(e) {
    e.preventDefault();
    inputRef.value = '';
}

export default function imageCardRender(images) {
    galleryContainer.insertAdjacentHTML('beforeend', imageCardTemplate(images));
}

function clearInterface() {
    galleryContainer.innerHTML = '';
}
