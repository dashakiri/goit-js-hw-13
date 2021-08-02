import Notiflix from 'notiflix';
const axios = require('axios');

const API_KEY = '22675606-31d87174acbb5d82d82bc8eb4';
const URL = 'https://pixabay.com/api/';
const options = '&image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

export default class ImageAPIService {
    constructor(searchQuery) {
        this.searchQuery = searchQuery;
        this.page = 1;
    }

    async getImages() {
        try {
            const response = await axios.get(`${URL}?key=${API_KEY}&q=${this.searchQuery}${options}&page=${this.page}`);
            return response.data.hits;
        }
        catch {
            (error) => {
                throw new Error(error);
            }            
        };
    }

    increasePage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
        
}
