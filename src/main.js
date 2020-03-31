import {dataPokemon, newList} from './data.js';

//Nodos 
let closeModal = document.querySelectorAll(".close");

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
    document.getElementById("boxImages").appendChild(node);
  });
  
} 
images(dataPokemon)

//Modal Información Pokemon   

let btnImg = document.querySelectorAll('.btn-Images');
btnImg.forEach(poke =>{ 
  let a = poke.id -1;
        
    const showData = () => {
            
      document.getElementById("modalPokemon").style.display="block";
      let container= document.getElementById("contentInfo");
      document.createElement('div');
      container.innerHTML=`
      <h3 class="num"> ${dataPokemon[a].num}</h3>
      <h4 class= "name"> ${dataPokemon[a].name}</h4>
      <div class= "img-contain"> <img class="img poke" src='${dataPokemon[a].img}' /> </div>
      <p class="type"> Tipo: ${dataPokemon[a].type} </p>
      <p class="weigth"> Peso: ${dataPokemon[a].weight}  Altura: ${dataPokemon[a].height} </p>
      <p class="candy"> Dulces: ${dataPokemon[a].candy_count} ${dataPokemon[a].candy}</p>
      <p class="egg"> Tipo de huevo: ${dataPokemon[a].egg}</p>
      <p class="average spawn"> Frecuencia de aparición: ${dataPokemon[a].avg_spawns}</p>`
    }
    poke.addEventListener('click',showData)          
  });                
  closeModal.forEach(closeModalPoke=>{
    closeModalPoke.addEventListener('click',function(){
      document.getElementById("modalPokemon").style.display = 'none';})
    }); 
      
 //Filtración
let options= document.querySelector(".dropdown-content");
options.addEventListener('click', (e)=>{
   let value= e.target.value;
 images(newList(dataPokemon,value));
  });
   
