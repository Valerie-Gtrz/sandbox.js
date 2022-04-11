
const animalSounds = ["moo", "woof", "meow", "baa"];
const humanSounds = ["Hi", "Nee Hao", "Hola", "Hallo"];

function whatDoTheySay(type) {
  if (type === "human") {
    console.log("This person says " + humanSounds[1]);
  } else {
    console.log("This animal says " + animalSounds[Math.floor(Math.random() * animalSounds.length)]);
  }
}
whatDoTheySay("human");

//comment added for commit