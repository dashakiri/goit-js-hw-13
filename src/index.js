import Notiflix from 'notiflix';
import './js/lightbox';
import { inputRef, searchButton, galleryContainer } from './js/refs';
import ImageAPIService from "./js/API-get";
import imageCardTemplate from "./templates/image-card.hbs";

inputRef.addEventListener('change', onSearch);
searchButton.addEventListener('click', onSearchButtonClick);

function onSearch(e) {
    clearInterface();
    const searchQuery = e.currentTarget.value.trim();
    const newImage = new ImageAPIService(searchQuery);
    newImage.getImages()
        .then(data => {
            console.log(data)
            if (data.length === 0) {
                Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
                throw new Error(error);
            };
            
            imageCardRender(data)
                
        })
        .catch(error => console.log(error));
}

function onSearchButtonClick(e) {
    e.preventDefault();
    inputRef.value = '';
}

function imageCardRender(images) {
    galleryContainer.insertAdjacentHTML('beforeend', imageCardTemplate(images));
      
    images.forEach(image => {
        const cardImg = document.querySelector('.card-img');
        const index = images.indexOf(image);
        
        cardImg.setAttribute('data-index', index);

        console.log(index)
        console.log(cardImg)
    })
}

function clearInterface() {
    galleryContainer.innerHTML = '';
}
