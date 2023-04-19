"use strict";

// #1 enteries() is ussed to create an iterator that returns an array of a given object's own unumerable property[key, value].

const person = {
  name: " Mich",
  secondName: " Scolter",
  gener: "male",
};
const entries = Object.entries(person);
console.log(entries);
