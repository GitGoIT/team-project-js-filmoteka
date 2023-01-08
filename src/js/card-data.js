
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




const array = JSON.parse(localStorage.getItem(STORAGE_KEY));

console.log(array);

function setMylibraryCard(evt) {
  array.push(evt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(array)); // метод для запису ключа/значення в local storage
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

}

