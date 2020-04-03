import {dataPokemon, newList} from './data.js';
import pokemon from './data/pokemon/pokemon.js';

//Nodos 
let closeModal = document.querySelectorAll(".close");
let contentImages = document.querySelector("#boxImages");
//Mostrar imagenes pantalla principal

const images = (data) => {
  return data.forEach(item =>{
    let image= item.img;
    let label= document.createElement('img');
    label.classList.add ("Imgns")
    label.id= item.id
    let btn= document.createElement('button');
    btn.classList.add ("btn-Images")
    btn.id+= (item.id -1);
    btn.appendChild(label);
    label.src= image;
    let node= btn;
    contentImages.appendChild(node);
  });
  
} 
images(dataPokemon);

//Modal Información Pokemon   
function printModal () {
  let btnImg = document.querySelectorAll('.btn-Images');
  console.log(btnImg)
  btnImg.forEach(btns =>{ 
    btns.addEventListener('click',(event)=>{
      let valueBtn = event.target.id -1;
      console.log(modal(dataPokemon,valueBtn));
    })    
  });                
  closeModal.forEach(closeModalPoke=>{
    closeModalPoke.addEventListener('click',function(){
      document.getElementById("modalPokemon").style.display = 'none';
    })
  }); 
};   
// printModal(modal(dataPokemon));
const modal = (pokemon,btn) => {
  document.getElementById("modalPokemon").style.display="block";
  let container= document.getElementById("contentInfo");
  document.createElement('div');
  container.innerHTML=`
  <h3 class="num"> ${pokemon[btn].num}</h3>
  <h4 class= "name"> ${pokemon[btn].name}</h4>
  <div class= "img-contain"> <img class="img poke" src='${pokemon[btn].img}' /> </div>
  <p class="type"> Tipo: ${pokemon[btn].type} </p>
  <p class="weigth"> Peso: ${pokemon[btn].weight}  Altura: ${pokemon.height} </p>
  <p class="candy"> Dulces: ${pokemon[btn].candy_count} ${pokemon[btn].candy}</p>
  <p class="egg"> Tipo de huevo: ${pokemon[btn].egg}</p>
  <p class="average spawn"> Frecuencia de aparición: ${pokemon[btn].avg_spawns}</p>`
};
printModal(modal);
 //Filtración
let options= document.querySelector(".dropdown-content");
options.addEventListener('click', (e)=>{
   let value= e.target.value;
   let dataFilter = newList(dataPokemon,value)
   contentImages.innerHTML = '';
   images(dataFilter);
   function printModal () {
    let btnImg = document.querySelectorAll('.btn-Images');
    console.log(btnImg)
    btnImg.forEach(btns =>{ 
      btns.addEventListener('click', console.log('holi'));
        // event)=>{
      //   let valueBtn = event.target.id;
      //   if (valueBtn == dataFilter.id){
      //   console.log(modal(dataFilter,valueBtn));
      // }
      // } )    
    });                
    closeModal.forEach(closeModalPoke=>{
      closeModalPoke.addEventListener('click',function(){
        document.getElementById("modalPokemon").style.display = 'none';
      })
    }); 
  };   
  printModal(modal)
  });
  