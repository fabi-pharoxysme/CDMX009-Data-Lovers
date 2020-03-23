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
     btn.id+= item.id
     btn.appendChild(label);
     label.src= image;
     let node= btn;
     document.getElementById("boxImages").appendChild(node);
  });
   //Modal Información Pokemon   

     let btnImg= document.querySelectorAll('.btn-Images');
      btnImg.forEach(poke =>{ 
        let a= poke.id
        console.log(a)
        
        

        
    
         const showData = () => {
            
             document.getElementById("modalPokemon").style.display="block";
             let container= document.getElementById("contentInfo");
             let cardInfo= document.createElement('div');
             container.innerHTML=`
             <h3 class="num"> ${dataPokemon[a].name}</h3>`
             //  document.querySelector('#card').appendChild(cardInfo);
            }
         poke.addEventListener('click',showData)          
        });                  
       
    // }); 
          
