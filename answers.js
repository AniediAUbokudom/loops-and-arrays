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


//Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michelangelo"];
console.log(ninjaTurtles); // Output: ["Donatello", "Leonardo", "Raphael", "Michelangelo"]

//Use a for of loop to call toUpperCase()on each of them and print out the result.


for (let element of ninjaTurtles) {
    let changeCaseName = element.toUpperCase();
    console.log(changeCaseName);
};

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic

console.log(favMovies.indexOf('Titanic'));

 //1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?


favMovies.sort();

console.log(favMovies); // the sort method permanently altered the indices of the array.

// 2.Use the method pop
favMovies.pop()
console.log(favMovies)


//3. Reverse the array
favMovies.reverse();
console.log(favMovies);


//4. push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

//5. Use the shiftmethod

favMovies.shift();
console.log(favMovies);

6. //unshift- what does it return?
favMovies.unshift();
console.log(favMovies);


//splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?


const removeIndex = favMovies.indexOf('Django Unchained');
if (removeIndex !== -1) {
  favMovies.splice(removeIndex, 1, 'Avatar');
}

console.log( favMovies);

//slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?


const midIndex = Math.floor(favMovies.length / 2);
const secondHalf = favMovies.slice(midIndex);

console.log("Last half of the array:", secondHalf);// the array remains unchanged
// 9. store the value of your slicein a variable, console.log it - Thought question: what is going on here?

console.log(secondHalf);

//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

favMovies.indexOf ('Fast and Furious')

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]];