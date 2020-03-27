import data from './data/pokemon/pokemon.js';
//Mostrar la data
export const dataPokemon= data.pokemon;
//Filtracion 
// export function filtered(element){
//   let filterNewList = data.pokemon.filter(p=>p.type.includes(element));
//   return filterNewList;
// }

// function onChange(e){
//   let value = e.target.value
//   let nuevaListaFiltrada = dataPokemon.filter(p=>p.type.includes(value))
//    console.log(nuevaListaFiltrada)
// };
//Orden por numero de Pokedex
export let numberPokedex= 
data.pokemon.sort((a, b)=>{
  if(a.id< b.id){
    return -1;
  }
  if (a.id> b.id){
    return 1;
  }
});
//console.log(numberPokedex)



