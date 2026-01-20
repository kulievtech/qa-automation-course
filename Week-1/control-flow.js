// 1. If - Example when the condition is true

// if is keyword provided by JS.
// Inside  parenthesis (), we need to give a condition.
// Inside curly braces {}, we have provide the code that we want it to run if the condition is true.

let age = 24;

// Condition becomes true behind the scene.
if (age > 18) {
  console.log("Hey, you are at an age that you can go to college!!!");
}

// 2. If - Example when the condition is false

age = 13;

if (age > 18) {
  console.log("Hey, you are at an age that you can go to college!!!");
}

console.log(age);

// 3. Else if

let studentScore = 75;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 75) {
  console.log("Grade B");
}

// 4. Else

let isRaining = true;

if (isRaining) {
  console.log("Take your umbrella with you, you are going to get wet!");
} else {
  console.log("You don't need umbrella, it's sunny outside!");
}

// 5. If, Else If, Else

// = is used for assingment
// === is used for comparison

let goalScore = 8;

if (goalScore > 6) {
  console.log("You are winning");
} else if (goalScore === 5) {
  console.log("It is a time game");
} else if (goalScore > 4) {
  console.log("You should try harder");
} else {
  console.log("You are losing");
}

// 6. Switch Statement

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 3:
    console.log("Friday");
    break;
  default:
    console.log("I was waiting for this day!");
}

console.log("Hello Students!");

let score = 85;

switch (true) {
  case score > 90:
    console.log("Excellent");
    break;
  case score >= 75:
    console.log("Good score");
    break;
  default:
    console.log("Needs improvement");
}
