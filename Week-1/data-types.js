// 1. String

const name = "Davit";
const myName = "Tohir"; // single quote but getting converted to double quotes on save.
const studentName = `Muhammad`;

console.log(name);
console.log(myName);
console.log(studentName);

// 2. Number

const birthYear = 1980;
const carModel = 2024;
const studentScore = 90.5;

console.log(birthYear);
console.log(carModel);
console.log(studentScore);

// 3. Boolean

// The is off when you enter the room
let isLightOn = false;
console.log("Is the light on?", isLightOn);

// -- Try to start boolean variable names with "is" -- //

// let isStudentPresent;
// let isGameStarted;
// let isMovieGood;

// Later, some one comes and turn on the light
isLightOn = true;
console.log("Is the light on?", isLightOn);

// 4. Null

// In the assigned seats in a party, it is 4pm nobody has arrived so it is null.
let seatOwner = null;
console.log("Seat status:", seatOwner);

// Party starts at 5pm, the seat has an owner now.
seatOwner = "Bohdana";
console.log("Seat status:", seatOwner);

// 5. Undefined

// Before teacher checking attendance
let studentPresent;
console.log("Student present?", studentPresent);

// Later teacher after checking attendance
studentPresent = true;
console.log("Student present?", studentPresent);

// 6. Arrays (Non-primitive - mutable) -> Square Brackets

// Make your variables name descriptive, try to use same data type.
const colors = ["red", "green", "blue"];
console.log(colors);

const studentScores = [70, 85, 88, 95];
console.log(studentScores);

// Not Recommened for arrays!!! - Array that has all kind of data types
const array = ["Johnathan", 30, true];
console.log(array);

// 7. Object (Non-primitive - mutable) -> Curly braces

// Left side inside curly braces is "keys" and the right side is "values"

let person = {
  name: "Alex",
  age: 42,
  isStudent: false,
  favoriteFruits: ["banana", "apple", "mango"],
};

console.log(person);

let soccerPlayer = {
  name: "Cristiano",
  age: 41,
  isSoccerPlayer: true,
  country: {
    countryName: "Saudia Arabia",
    city: "Riyadh",
    zipCode: "567890",
  },
};

console.log(soccerPlayer);

// Accessing a key in an object
console.log(soccerPlayer.country);

// test 3
