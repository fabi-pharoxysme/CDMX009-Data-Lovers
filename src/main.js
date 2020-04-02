import {dataPokemon, newList} from './data.js';

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
    btn.id+= item.id
    btn.appendChild(label);
    label.src= image;
    let node= btn;
    contentImages.appendChild(node);
  });
  
} 
images(dataPokemon);

//Modal Información Pokemon   

// let btnImg = document.querySelectorAll('.btn-Images');
function printModal (pokemon) {
  let btnImg = document.querySelectorAll('button');
  btnImg.forEach(poke =>{ 
  let a = poke.id -1
        
    const showData = () => {
     
      document.getElementById("modalPokemon").style.display="block";
      let container= document.getElementById("contentInfo");
      document.createElement('div');
      container.innerHTML=`
      <h3 class="num"> ${pokemon[a].num}</h3>
      <h4 class= "name"> ${pokemon[a].name}</h4>
      <div class= "img-contain"> <img class="img poke" src='${pokemon[a].img}' /> </div>
      <p class="type"> Tipo: ${pokemon[a].type} </p>
      <p class="weigth"> Peso: ${pokemon[a].weight}  Altura: ${pokemon[a].height} </p>
      <p class="candy"> Dulces: ${pokemon[a].candy_count} ${pokemon[a].candy}</p>
      <p class="egg"> Tipo de huevo: ${pokemon[a].egg}</p>
      <p class="average spawn"> Frecuencia de aparición: ${pokemon[a].avg_spawns}</p>`
    }
    poke.addEventListener('click',showData)          
  });                
  closeModal.forEach(closeModalPoke=>{
    closeModalPoke.addEventListener('click',function(){
      document.getElementById("modalPokemon").style.display = 'none';})
    }); 
  };   
  printModal(dataPokemon);
 //Filtración
let options= document.querySelector(".dropdown-content");
options.addEventListener('click', (e)=>{
   let value= e.target.value;
   let dataFilter = newList(dataPokemon,value)
   contentImages.innerHTML = '';
   images(dataFilter);
   printModal(dataFilter);
  });