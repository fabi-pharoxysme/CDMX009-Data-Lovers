import {dataPokemon} from './data.js';

//Nodos 
let closeModal = document.querySelectorAll(".close");

//Mostrar imagenes pantalla principal

const images = (data) => {
 data.forEach(item =>{
    let image= item.img;
    let label= document.createElement('img');
    label.className += ("Imgns")
    label.id= item.id
    let btn= document.createElement('button');
    btn.className+= ("btn-Images")
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
let options= document.getElementsByClassName("options");
console.log(option)
let principalImg = document.querySelectorAll(".Imgns")
options.addEventListener('click', (e)=>{
  let value= e.target.value;
  let newList= dataPokemon.filter(p=>p.type.includes(value));
  console.log(newList)
  // newList.forEach((item)=>{
  //   let imageid= item.id 
  //        console.log(imageid)
  //  })
  
    
    //  let label= document.createElement('img');
    //  label.src= image;
    //  cont.appendChild(label);
  })
  // newList.forEach((item))
// })


   
