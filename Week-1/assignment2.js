// Question 11

let number = 9;

if (number < 0) {
  console.log("Negative number, we don't care!");
} else if (number < 10) {
  console.log("Single digit number");
} else if (number < 100) {
  console.log("Double digit number");
} else {
  console.log(
    "Definitely not a negative, single or double digit number, so it is something else!",
  );
}
