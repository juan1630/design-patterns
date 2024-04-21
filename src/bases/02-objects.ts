export const pokemonId = [1,2,3,4,10,20,30];


interface Pokemon{
    id: number;
    name: string;
    age?: number | undefined;
}

export const bulbasur: Pokemon = {
    name:"Bulbasur",
    id:1,
    age:30
}


export const charmander: Pokemon = {
    name: "charmander",
    id:4,
    age:2
}



// arrays

export const pokemons: Pokemon[] = [];

pokemons.push(charmander);
console.log(pokemons);