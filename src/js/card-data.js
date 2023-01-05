
const fff = document.querySelector('.card-list'); 
console.log(fff); 
 
const handler = event => { 
  event.preventDefault(); 
   console.log(event.target.closest('.card-link').getAttribute('data-id'));  
}; 
 
fff.addEventListener('click', handler); // ловимо атрибут data-id при кліку на картку

