console.log("I am here!");

var critter = {};
var critterCount = 0;

while (critterCount < 2) {
  var key = prompt("What do you want me to know about your critter?");
  var value = prompt("Ok, Critter has " + key + ". How many?");

  critter[key] = value;

  critterCount = critterCount + 1;
}
console.log("Your critter is pretty awesome!")
console.log(critter);

// var critter = {
//   legs: 4,
//   fluffFactor: 25,
//   canFly: true,
//   eyes: 1,
//   likesToParty: true,
// };
//
// if (critter.likesToParty){
//   console.log("Woo! PARTY!");
// } else {
//   console.log("Quiet please. I am reading a book about snails.")
// }
//
// console.log("My critter has " + critter.legs +" legs.");
