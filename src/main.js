import { getImagesByQuery } from './js/pixabay-api.js';

const form = document.querySelector('.form');
form.addEventListener('submit', handleUserSearch);

function handleUserSearch(evt) {
    evt.preventDefault();
    const userSearch = evt.target.elements['search-text'].value.trim();
    if (!userSearch) {
        return;
    }
    getImagesByQuery(userSearch);

    evt.target.reset();
}
