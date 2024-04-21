import { Move, PokemonResponse } from '../interfaces/Response-pokemon.interface';
import { PokeFetchAdapter, PokemonApiAdapter } from '../api/pokeApi.adapter'

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        //public http: PokemonApiAdapter
        public http: PokeFetchAdapter
        // Todo: inyectar dependencias

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        //const { data } = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/4');
       const data = await this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(  data.moves );
        
        return data.moves;
    }

}
const pokeApi = new PokemonApiAdapter();
export const charmander = new Pokemon( 4, 'Charmander', pokeApi );

charmander.getMoves()