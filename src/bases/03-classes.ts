import axios from 'axios';
import { Move, PokemonResponse } from '../interfaces/Response-pokemon.interface';
export class Pokemon {

    constructor(
                public readonly id: number, 
                public readonly name: string 
            ){
        
    }

    //readonly no permite modificar el valor de la propiedad

    async getMoves(): Promise<Move[]> {
       const {data} = await axios.get <PokemonResponse> ('https://pokeapi.co/api/v2/pokemon/4');
       console.log(data.moves.forEach(move => console.log(move.move.name)))
       return data.moves;
    }
}


export const charmander = new Pokemon( 4, 'cahrmander' )
charmander.getMoves();