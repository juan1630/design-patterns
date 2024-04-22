const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}


export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){

    }


    screm() {
        console.log(`${this.name.toUpperCase()} !!!!!`);
    }

    @Deprecated('Most use speak2 method instead')
    speak(){
        console.log(`${this.name}, ${this.name.toUpperCase()}!!!`);
    }

    speak2(){
        console.log(`${this.name}, ${this.name.toUpperCase()}!!!!!!!!`);
    }
}


export const charmander = new Pokemon(90, "Charmander");
charmander.speak();
//tira un warning