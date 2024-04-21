import './style.css';
//import { name, age, isValid, templateString } from './bases/01-types'
//import { bulbasur, pokemons } from './bases/02-objects';
import { charmander } from "./bases/03-classes"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1> Hello vite...  </h1>
  <a> Documentacion ${charmander.id} - ${charmander.name} </a>
`

