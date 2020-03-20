import {dataPokemon} from './data.js';
import pokemon from './data/pokemon/pokemon.js';

console.log();
//Nodos 
let modal = document.querySelector(".modal-container");
let closeModal = document.querySelector(".close");
let openModal = document.querySelector("#ranking");


  //Mostrar imagenes pantalla principal
const images = dataPokemon.forEach((item) => {
    let image= item.img;
    let label= document.createElement('img');
    label.className+=("a" +item.id)
    let btn= document.createElement('button');
    btn.className+= ("btn-Images")
    btn.appendChild(label);
    label.src= image;
    let node= btn;
    document.getElementById("boxImages").appendChild(node);
    


});

    let boxImages=document.querySelector("#dinamic");



let btn= document.querySelectorAll('.btn-Images');
btn.forEach (pokebola => 
    pokebola.addEventListener('click',()=>{
    document.getElementById("modalPokemon").style.display="block";
    
    
    showData(dataPokemon).forEach(Element);    
    function showData(poke){
    let container= document.getElementById("contentInfo");
let cardInfo= document.createElement('div');
container.innerHTML=`
        <h3 class="num"> ${poke.num}</h3>
        <h4 class= "name"> ${poke.name}</h4>
        <div class= "img-contain"> <img class="img poke" src='${poke.img}' /> </div>
        <p class="type"> Tipo: ${poke.type} </p>
        <p class="weigth"> Peso: ${poke.weight}  Altura: ${poke.height} </p>
        <p class="candy"> Dulces: ${poke.candy_count} ${poke.candy}</p>
        <p class="egg"> Tipo de huevo: ${poke.egg}</p>
        <p class="average spawn"> Frecuencia de aparición: ${poke.avg_spawns}</p>
        <h3 class= "evolutions"> Evoluciones </h3>
        <p class="prev-evolution"> ${poke.prev_evolution}</p>
        <span class="next-evolution> ${poke.next_evolution}</span>`;
document.querySelector('#card').appendChild(cardInfo);
}
}))

    //Modal 
 /*openModal.addEventListener('click', function(){
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function(){
    modal.style.display ='none';
})*/

/*window.addEventListener('click',function(e){
    if (e.target == flex){
        modal.style.display= 'none';
    }
});/*


/*dataPokemon.forEach(element => {
    let text = element.name;
    console.log(text);
   });*/
//    let select= document.querySelectorAll('.btn-Images');

//    select.forEach(pokebola=>{
//     pokebola.addEventListener('click', e=>printInfo(e));
// })

   function showModals(showData){
       let info= '';
       
       function showData (poke){
        info += `
        <h3 class="num"> ${poke.num}</h3>
        <h4 class= "name"> ${poke.name}</h4>
        <div class= "img-contain"> <img class="img poke" src='${poke.img}' /> </div>
        <p class="type"> Tipo: ${poke.type} </p>
        <p class="weigth"> Peso: ${poke.weight}  Altura: ${poke.height} </p>
        <p class="candy"> Dulces: ${poke.candy_count} ${poke.candy}</p>
        <p class="egg"> Tipo de huevo: ${poke.egg}</p>
        <p class="average spawn"> Frecuencia de aparición: ${poke.avg_spawns}</p>
        <h3 class= "evolutions"> Evoluciones </h3>
        <p class="prev-evolution"> ${poke.prev_evolution}</p>
        <span class="next-evolution> ${poke.next_evolution}</span>`;
       }
    container.innerHTML=info;
}



// document.querySelectorAll(".btn-Images").forEach(openModalPoke=>{
//      openModalPoke.addEventListener('click',function(){
//         let info= document.querySelectorAll(".nodo")
//            info.forEach((info)=>{
//                info.style.display= 'block';
//            })
//         })
// });


//  let closeModalPokemon = document.querySelectorAll(".closePokemon");
//      closeModalPokemon.forEach(closeModalPoke=>{
//       closeModalPoke.addEventListener('click',function(){
//         let info= document.querySelectorAll(".nodo")
//         info.forEach((info)=>{
//             info.style.display='none';
//         })
//            })
//      });