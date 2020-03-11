import data from './data/pokemon/pokemon.js';
// esta es una función de ejemplo
//Mostrar la data
export const dataPokemon= data.pokemon;
//Filtracion 
function onChange(e){
  let value = e.target.value
  let nuevaListaFiltrada = data.pokemon.filter(p=>p.type.includes(value))
}
//console.log(nuevaListaFiltrada)
  

/*export const images = data.pokemon.forEach((item) => {
    let image= item.img;
    let label= document.createElement('img');
    let btn= document.createElement('button');
    btn.className+= ("btn-Images")
    btn.appendChild(label);
    label.src= image;
    let node= btn;
    document.getElementById("boxImages").appendChild(node);
  });*/


// `<img src="${node}" alt="${item.name}>`