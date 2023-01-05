import { fetchTrendingObjects } from './fetch-api';
import { fetchSearchingObjects } from './fetch-api';
import { clearObjectsContainer } from './fetch-api';

fetchTrendingObjects(); // виводимо фетч популярних

const input = document.querySelector('.input-position')
const searchForm = document.querySelector('.search-form')

// console.log(searchForm)

function onSearch (e) {
    e.preventDefault();
    const data = input.value;

    console.log(data)
    clearObjectsContainer(); // чистимо контейнер перед завантаженням даними наступного пошуку
    fetchSearchingObjects(data); // виводимо фетч пошуку
};

searchForm.addEventListener('submit', onSearch)  // слухач для форми пошуку





