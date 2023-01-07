
const getCardId = document.querySelector('.card-list'); 
// console.log(getCardId);



const handler = event => { 
  event.preventDefault(); 
  console.log(event.target.closest('.card-link').getAttribute('data-id'));
  const cardId = event.target.closest('.card-link').getAttribute('data-id');
  setMylibraryCard(cardId);
  // return cardId; 
  
}; 
 
getCardId.addEventListener('click', handler); // ловимо атрибут data-id при кліку на картку

const STORAGE_KEY = 'mylibrary-card-id'; // замінюємо зрозумілою константою назву ключа в local storage (необов'язково)

let ID = [];

function setMylibraryCard(evt) {
  const newID = ID.push(evt);
  localStorage.setItem(STORAGE_KEY, newID); // метод для запису ключа/значення в local storage
  console.log(JSON.parse(window.localStorage.getItem(STORAGE_KEY)));
}

