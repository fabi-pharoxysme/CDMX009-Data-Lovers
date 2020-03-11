import {images, dataPokemon} from './data.js';

console.log(images());
// const start= document.querySelector('.dinamic');
//Nodos 
let modal = document.querySelector(".modal-container");
let flex = document.querySelector(".flex");
let closeModal = document.querySelector(".close");
let openModal = document.querySelector("#ranking"); 
let openmodalPokemon = document.querySelector(".btn-Images");
let modalPokemon = document.querySelector(".modalPokemon")

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

/*dataPokemon.forEach(element => {
    let text = element.name;
    console.log(text);
   });*/

//Modal de información 
const modalPokemons= dataPokemon.forEach(poke=>{
    modalPokemon.innerHTML = `
    <div class= "contenido-modal-pokemon">
    <div class= " modal-header-pokemon">
    <h3 class="num"> ${poke.num}</h3>
    <h4 class= "name"> ${poke.name}</h4>
    <span class= "close" id= "close"> &times; <span>
    </div>
    <div class= "modal-body-pokemon>
    <div class= "img-contain"> <img class="img poke" src='${poke.img}' /> </div>
    <p class="type"> Tipo: ${poke.type} </p>
    <p class="weigth"> Peso: ${poke.weight}  Altura: ${poke.height} </p>
    <p class="candy"> Dulces: ${poke.candy_count} ${poke.candy}</p>
    <p class="egg"> Tipo de huevo: ${poke.egg}</p>
    <p class="average spawn"> Frecuencia de aparición: ${poke.avg_spawns}</p>
    </div>
    <div class= "modal-footer-pokemon">
    <h3 class= "evolutions"> Evoluciones </h3>
    <p class="prev-evolution"> ${poke.prev_evolution}</p>
    <span class="next-evolution> ${poke.next_evolution}</span>
    </div>`
});
 
 