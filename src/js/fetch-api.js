import objectTpl from './render-markup';



const objectsContainer = document.querySelector('.card-list');  // отримуємо доступ до поля карток

// console.log(objectsContainer)

const API_KEY = '9d504f0d6629b3ea4ce96304b577daca' // виносимо ключ в змінну

//=================================== ФЕТЧ ПОПУЛЯРНИХ =============================================

export function fetchTrendingObjects() {  // формуємо єдиний метод який буде відповідати за HTTP запити
    
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    
        return fetch(url)  //забираємо проміс даних по лінку API
            .then(response => response.json()) //парсимо дані в текстовий формат json
            .then(objects => {
                const data = objects.results;
                console.log(data)
                objectsContainer.insertAdjacentHTML('beforeend', objectTpl(data));
            })
}


//=================================== ФЕТЧ ПОШУКУ =============================================

export function fetchSearchingObjects(searchQuery, page) {  // формуємо єдиний метод який буде відповідати за HTTP запити
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=folse`
    
        return fetch(url)  //забираємо проміс даних по лінку API
            .then(response => response.json()) //парсимо дані в текстовий формат json
            .then(objects => {
                const data = objects.results;
                console.log(data)
                objectsContainer.insertAdjacentHTML('beforeend', objectTpl(data));
          
                // return objects; // повертаємо у зовнішній код проміс значення об'єкту даних
            })
}



export function clearObjectsContainer() {  // функція очистки контейнеру перед мапінгом в дом значень іншого пошуку
    objectsContainer.innerHTML = '';
}
