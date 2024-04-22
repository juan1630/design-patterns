export class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){

    }


    screm() {
        console.log(`NO QUIERO`);
    }

    speak(){
        console.log(`NO QUIERO HABLAR`);
    }
}

const MyDecorator = () => {
    //lo decoradores se usan para modificar una clase, agregar mas funcionalidad
    return ( target: Function ) => {
       return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){

    }


    screm() {
        console.log(`${this.name.toUpperCase()} !!!!!`);
    }

    speak(){
        console.log(`${this.name}, ${this.name.toUpperCase()}!!!`);
    }
}


export const charmander = new Pokemon(90, "Charmander");

charmander.screm();
charmander.speak();
