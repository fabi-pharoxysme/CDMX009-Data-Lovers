import data from './data/pokemon/pokemon.js';
//Mostrar la data
export const dataPokemon= data.pokemon;
//Orden por numero de Pokedex
export const numberPokedex= 
data.pokemon.sort((a, b)=>{
  if(a.id< b.id){
    return -1;
  }
  if (a.id> b.id){
    return 1;
  }
});
// Filtración
export const newList= (dataPokemon,type) => dataPokemon.filter(pokemon => pokemon.type.includes(type));

