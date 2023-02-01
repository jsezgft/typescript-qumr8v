// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let myvar: boolean = true;
let myvar1: boolean = !'';
let myvar2: boolean = !'texto';

let variable;
variable = '23';
variable = 23;

const numbers: number[] = [1, 2];
const numbers2: Array<number> = [1, 2];

function printName(person: { first: string; last: string }) {}

//printName("jose","perez")
printName({ first: 'jose', last: 'perez' });

function printNameWithoutLast(person: { first: string; last?: string }) {}

printNameWithoutLast({ first: 'jose' });

type Person = { first: string; last: string };
//Person is type alias
function printPerson(person: Person) {}

let a: number | string; //contrived example
let b: string | null;

function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  }
}

//literal types

const c = 10;
const e = { name: 'pepe' };
e.name = 'pepita';

let d = 10;

type alignment = 'left' | 'right' | 'center';
let estate: alignment = 'right';

type Pointe = { x: number; y: number };

function calculateDistance(p1: Pointe, p2: Pointe) {}

//OBJECT TYPES BEST PRACTICE INTERFACES
interface Point {
  x: number;
  y: number;
}

interface Course {
  readonly title: string;
  description: string;
  duration?: number;
}
let curso: Course = { title: 'typescript', description: 'about' };

//curso.title='otro'  //Readonly work in types

interface Animal {
  name: String;
}

interface Bear extends Animal {
  honey: boolean;
}

type Animala = {
  name: String;
};

type Beara = Animala & {
  honey: boolean;
};
