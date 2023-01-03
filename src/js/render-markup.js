const basicImgURL = 'https://image.tmdb.org/t/p/w500';

export default function objectTpl(data) { // функцію шаблону мапінгу результатів фетчу в дом
    const markup = data.map(object => { // мапимо дані з API в заготовку html для картки, огортаємо зображення в лінк для підключення simplelightbox

        return `<li class="card">
                <a href="" class="card-link link">
                <img class="card-img" src="${basicImgURL}${object.poster_path}" alt="">
                <h3 class="card-name">${object.original_title}</h3>
                <div class="card-item">
                <p class="card-genres">Genres</p>
                <p class="card-year"><span class="card-line">|</span>${object.release_date}</p>
                <p class="card-rating">${object.vote_average}</p>
                </div>
                </a>
                </li>`;
    })
        .join(''); // об'єднуємо всі елементи масиву в строку та розділяємо 'пробілом' (прибираємо коми за замовчуванням)
    console.log(markup)
    return markup;
}  