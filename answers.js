//Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);

}
//Write a for loop that will log only the even numbers in 0 through 200.


for (let i = 0; i <= 200; i += 2) {
  console.log(i);
};


// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.



for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
};

// //const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.

const plantee = ["Plantee", "plant", 5000, "Mordor"]; //original array
plantee[2]++; // Increment age by 1

console.log(plantee); //output;

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]; //original array
wolfy[3] = "Gotham City"; // change hometown to "Gotham City"
console.log(wolfy); // Output;

//Give D'Art a second hometown by adding "Hawkins"

const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]; //original array
dart.push("Hawkins"); //add Hawkins
console.log(dart); // Output;

//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".


wolfy[0] = "Gameboy" //replace name with Gameboy
console.log(wolfy);






