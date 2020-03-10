import {images} from './data.js';

console.log(images());
// const start= document.querySelector('.dinamic');
//Nodos 
let modal = document.querySelector(".modal-container");
let flex = document.querySelector(".flex");
let closeModal = document.querySelector(".close");
let openModal = document.querySelector("#ranking"); 
// const mostrandoData = () => {
//     let result= '';
//     start.appendChild(images);
//     return result;
// }

// window.onload = mostrandoData(mostrandoData);

/* images.forEach((item) => {
        start.innerHTML += `
        <div>
            <div class= "imgs">
                <img src= "$ {element.img}" alt="${element.img}">
            </div>
        </div>`
    }); */
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
