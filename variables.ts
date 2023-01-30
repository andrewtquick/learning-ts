let movieTitle: string = "Liar Liar";
movieTitle = "Fast and Furious";
// movieTitle = 9;

let numCatLives: number = 9;

let tvShow = "Last of Us";
tvShow = "Breaking Bad";
// tvShow = false;

function square(num: number) {
  return num * num;
}

const x = (num: number) => {
  return num * num;
};

// function greet(person: string = "stranger") {
//   return `Hi there, ${person}`;
// }

function square1(num: number): number {
  return num * num;
}

const colors = ["red", "green", "blue"];

colors.map((color) => {
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  // void indicates that the function doesn't return anything
  // can be used with variables, but very unusual
  console.log(msg);
  console.log(msg);
}

function makeError(msg: string): never {
  // never is typically for a function that never stops executing
  // never, just like void, should never have a return value
  throw new Error(msg);
}

const myDog = {
  name: "Niko",
  breed: "Pitbull",
  age: 1,
};

const printName = (dog: { name: string; breed: string; age: number }): void => {
  console.log(`${dog.name} is a ${dog.breed}`);
};

// Create your own type with type
// types are always Capitalized
// type Point = {
//   x: number;
//   y: number;
// };

let coords: Point = { x: 23, y: 33 };

const makeRandomCoord = (): Point => {
  return { x: Math.random(), y: Math.random() };
};

const doublePoint = (point: Point): Point => {
  return { x: point.x * 2, y: point.y * 2 };
};

// Nested types
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

const calculatePayout = (song: Song): number => {
  return song.numStreams * 0.0033;
};

const printSong = (song: Song): void => {
  console.log(`${song.title} - ${song.artist}`);
};

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 321321685,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
printSong(mySong);
console.log(earnings);

// Types can have an optional requirement
// To make a property optional, just add a ? after the name, example z?: number
type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = {
  x: 1,
  y: 3,
};

// modifier readonly - essentially makes a type property a constant, you can't change it.
// once it is set, it cannot be changed afterwards

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 123123,
  username: "catgurl",
};

console.log(user.id);
// user.id = 122134 - not allowed to make the change

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

// intercept types with an &
// Essentially joining the two types together to create a new type
// the properties are concatenated together to form a new type that can be used joinly
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & { age: number };

const christy: CatDog = { numLives: 7, breed: "husky", age: 12 };

const activeUsers: string[] = [];
const activeUsers1: number[] = [];
const activeUsers2: boolean[] = [];
const bools: Array<boolean> = [];

type Points = {
  x: number;
  y: number;
};

const cords: Points[] = [];

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

// union types
// means a mixed array of numbers and strings
const stuff: (number | string)[] = [2, "string"];
// means a number array or a string array only
const stuffs: number[] | string[] = [];

let zero: 0 = 0;

const mood: "Happy" | "Sad" = "Happy";
