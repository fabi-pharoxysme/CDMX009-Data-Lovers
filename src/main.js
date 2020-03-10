import {images, dataPokemon} from './data.js';

console.log(images());
// const start= document.querySelector('.dinamic');
//Nodos 
let modal = document.querySelector(".modal-container");
let flex = document.querySelector(".flex");
let closeModal = document.querySelector(".close");
let openModal = document.querySelector("#ranking"); 
    //Modal 
 openModal.addEventListener('click', function(){
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function(){
    modal.style.display ='none';
});

window.addEventListener('click',function(e){
    if (e.target == flex){
        modal.style.display= 'none';
    }
});

dataPokemon.forEach(element => {
    let text = element.name;
    console.log(text);
   });
