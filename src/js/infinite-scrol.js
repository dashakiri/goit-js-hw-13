import Notiflix from 'notiflix';
import ImageAPIService from "./API-get";
import { newImage } from "../index";
import imageCardRender from "../index";

let dataset = [];

function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight > scrollHeight - 10) {
        newImage.getImages().then(newImage.increasePage()).then(images => {
            if (images.length === 0) {
                Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
                return;
            }
            imageCardRender(images)
        })
    }

}

window.addEventListener('scroll', onScroll)