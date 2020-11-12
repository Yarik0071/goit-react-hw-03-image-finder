import axios from 'axios';

const fetchImagesAPI = ({ query, page }) => {
    return axios
    .get(`https://pixabay.com/api/?key=18831622-9244bba9a478239a3bc8b47ec&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits)
}

export default {
    fetchImagesAPI,
}