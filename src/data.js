import data from './data/pokemon/pokemon.js';

// esta es una función de ejemplo
//Mostrar la data
export const dataPokemon= () => { 
  //data.pokemon.filter((item) => item.id === Number);
 return data.pokemon;
};

//Filtración/orden
for (let i=0; i<data.pokemon.length; i++){
  let typePokemon=data.pokemon[i].type;
  for (let j=0; j<typePokemon.length;j++){
    if (typePokemon[j]==='Fire') {
      console.log(data.pokemon[i].name);
    }
  }
}

function onChange(e){
  let value = e.target.value
  let nuevaListaFiltrada = data.pokemon.filter(p=>p.type.includes(value))
}
console.log(nuevaListaFiltrada)
