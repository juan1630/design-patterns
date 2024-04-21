

export class Pokemon {

    constructor(public readonly id: number, public readonly name: string ){
        console.log("constructor");
    }

    //readonly no permite modificar el valor de la propiedad
}


export const charmander = new Pokemon( 4, 'cahrmander' )