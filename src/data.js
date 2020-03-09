import data from './data/pokemon/pokemon.js';
// esta es una función de ejemplo
//Mostrar la data
/*export const dataPokemon= () => { 
 return data.pokemon;
};*/
//Filtración/orden
/*for (let i=0; i<data.pokemon.length; i++){
  let typePokemon=data.pokemon[i].type;
  for (let j=0; j<typePokemon.length;j++){
    if (typePokemon[j]==='Fire') {
      console.log(data.pokemon[i].name);
    }
  }
}*/

//function onChange(e){
  //let value = e.target.value
  let nuevaListaFiltrada = data.pokemon.filter(p=>p.type.includes(/*value*/'Fire'))
//}



export const images = ()=> {
  data.pokemon.forEach((item) => {
    let img= document.createTextNode(item.img);
    let label= document.createElement('img');
    label.src=img;
    let node= label;
    // console.log(label);
    // console.log(item.img);, label.textContent
    document.getElementById("boxImages").appendChild(node);
  })
}

console.log(nuevaListaFiltrada);

// `<img src="${node}" alt="${item.name}>`