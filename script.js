"use strict";

// #0 clonning object
// let user = { a: 9, b: "s" };
// let user2 = {};

// for (let key in user) {
//   user2[key] = user[key];
// }
// user2.a = 8;
// console.log(user2, user);
//Object.assign(target, sourse, sourse), this method copies all properies of the sourse objects !! DOES NOTE CLONE NESTED PROPERTYES |\\ functions properties arn't supported

// let user = { name: "Mike" };
// let user0 = { pertmit: true };
// let user1 = { allow: false };
// Object.assign(user, user0, user1);
// console.log(user);

// let user = { a: 1, b: { n: 0 } };
// let clone = Object.assign({}, user);
// console.log(clone);

// Deep clonning method structuredClone();
// let myObj = {
//   a: { a: "b" },
//   b: "a",
// };

// let newObj = structuredClone(myObj);
// console.log(myObj, newObj);

// newObj.a.a = "d";
// let objcl = { ...newObj };
// console.log(myObj, newObj, objcl);

// # short object functin sintax

// let myObj = {
//   b: 1,
//   a() {
//     console.log(this.b);
//   },
// };
// myObj.a();
// this keyworld

// function myF() {
//   return {
//     name: "why",
//     ref() {
//       return this;
//     },
//   };
// }
// let user = myF();
// console.log(user.ref().name);

// # calculator calling methods

// let calculator = {
//   add() {
//     return this.a + this.b;
//   },
//   multpl() {
//     return this.a * this.b;
//   },
//   read() {
//     this.a = +prompt("a", 0);
//     this.b = +prompt("b", 0);
//   },
// };
// calculator.read();
// alert(calculator.add());
// alert(calculator.multpl());

// leader exersise
// let leader = {
//   step: 0,
//   up() {
//     this.step++;
//     console.log(this, "up");
//     return this;
//   },
//   down() {
//     this.step--;
//     console.log(this, "down");
//     return this;
//   },
//   showStep() {
//     console.log(this);
//     console.log(this.step);
//     return this;
//   },
// };
// leader.down().up().showStep().up().showStep();

// #01 consructor function

// function User(name) {
//   this.name = name;
//   this.admin = false;
// }
// let user = new User("hry");
// console.log(user.name);

//#02 Constracor method
// function User(name) {
//   this.name = name;
//   this.gr = function () {
//     console.log("log " + this.name);
//   };
// }
// let user = new User("Ksy");
// user.gr();
// let obj = {};

// function A() {
//   return obj;
// }
// function B() {
//   return obj;
// }
// let a = new A();
// let b = new B();
// console.log(a == b);

// function Calculator0(a, b) {
//   this.a = a;
//   this.b = b;
//   this.read = function () {
//     a = +prompt("number", 0);
//     b = +prompt("number", 0);
//     console.log(a, b);
//   };
//   this.sum = function () {
//     return a + b;
//   };
//   this.mult = function () {
//     return a * b;
//   };
// }
// let calk = new Calculator0();
// calk.read();
// console.log(calk.sum());
// console.log(calk.mult());

// #03 constractor exersies accomulate

// function Ac(value) {
//   this.value = value;

//   this.acc = function () {
//     this.value += +prompt("v", 0);
//   };
// }
// let accm = new Ac(5);
// accm.acc();
// accm.acc();
// console.log(accm.value);
// #1 enteries() is ussed to create an iterator that returns an array of a given object's own unumerable property[key, value].

// const person = {
//   name: " Mich",
//   secondName: " Scolter",
//   gener: "male",
// };
// const entries = Object.entries(person);
// console.log(entries);

//#2 Object.keys() retrives the keys from  given object

// const obj = { a: 1, b: 2 };
// const objKeys = Object.keys(obj);
// console.log(objKeys);

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
