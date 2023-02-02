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

function f1(a: any) {
  return a.toUpperCase();
}
console.log(f1('hola'));

function f2(a: unknown) {
  if (typeof a == 'string') return a.toUpperCase();
}
console.log(f2('hola'));

let somenever: unknown;
somenever = 23;

let somenever2: never;

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
  }
}

interface Line {
  kind: 'line';
  lenght: number;
}

function f(text: string): number {
  console.log('probando');
  return text.length;
}

const result = f('data');

console.log(result);

type myfunction = (text: string) => number;

const p: myfunction = function (title) {
  return title.length;
};

interface Course2 {
  title: string;
  description: string;
}

type OnCourseCreated = (title: string) => void;

function createCourse(
  title: string,
  description: string,
  callback: OnCourseCreated
): Course {
  callback(title);
  return { title: '', description: '' };
}

type operator = (number1: number, number2: number) => number;

const add: operator = function (n1: number, n2: number) {
  return n1 + n2;
};

type arrayOfNumbersToNumber = (arr: number[]) => number;

const firstNumber: arrayOfNumbersToNumber = function (array) {
  return array[0];
};

type arrayOfSomethingsToSomething = (arr: any[]) => any;

const firstElement: arrayOfSomethingsToSomething = function (array) {
  return array[0];
};

let l = firstElement([1, 2, 3]);

console.log(l);

let m = firstElement(['2', '3']);

type arrayOfSomethingsToSomething2 = <Type>(arr: Type[]) => Type;

//Type is a Generic Type Variable

const secondElement: arrayOfSomethingsToSomething2 = function (array) {
  return array[1];
};

let k = secondElement([1, 2, 3]);
console.log(k);

type arrayOfSomethingsToSomething3 = <T>(arr: T[]) => T;

const thirdElement: arrayOfSomethingsToSomething2 = function (array) {
  return array[2];
};

let g = thirdElement<string>(['1,2,3', 'sss', 'dadfa']);
console.log(g);

function map(array, func) {
  return array.map(func);
}
console.log(map([1, 2, 3], (x) => 2 * x));
let n = [1, 2, 3].map((x) => 2 * x);

function map2<T, U>(array: T[], func: (arg: T) => U): U[] {
  return array.map(func);
}
console.log(map2([1, 2, 3], (x) => 5 * x));
console.log(map2(['aaa', 'bb'], (x) => x.length));
console.log(map2<string, number>(['aaa', 'bb'], (x) => x.length));
