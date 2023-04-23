"use strict";

// #1 enteries() is ussed to create an iterator that returns an array of a given object's own unumerable property[key, value].

// const person = {
//   name: " Mich",
//   secondName: " Scolter",
//   gener: "male",
// };
// const entries = Object.entries(person);
// console.log(entries);

//#2 Object.keys() retrives the keys from  given object

const obj = { a: 1, b: 2 };
const objKeys = Object.keys(obj);
console.log(objKeys);

// to lern
// const mySymbol = Symbol();
// const obj = {};

// Object.defineProperty(obj, mySymbol, { value: "my value", enumerable: false });

// console.log(Object.keys(obj)); // []
// console.log(Object.getOwnPropertyNames(obj)); // []
// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol()]
// console.log(obj[mySymbol]); // "my value"
// let fruit = prompt("get", "apple");
// let bag = { fruit: 5 };
// alert(bag.fruit);

// # clonning object
// let user = { a: 9, b: "s" };
// let user2 = {};

// for (let key in user) {
//   user2[key] = user[key];
// }
// user2.a = 8;
// console.log(user2, user);
