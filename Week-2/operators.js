// Arithmetic Opeartors //

// 1. Addition

const number = 5 + 2;
console.log(number + 3);

console.log(4 + 3);

// 2. Substraction

console.log(9 - 4);

// 3. Multiplication

console.log(2 * 4);

// 4. Division

console.log(8 / 4);

// 5. Exponention

console.log(2 ** 3);

// 6. Modulus (Remainder) operator

console.log(8 % 2);
console.log(10 % 7);

// 7. Increment operator

let a = 5; // -> 5 + 1

a++;

console.log(a);

// 8. Decrement operator

let b = 11;

b--;
b--;
b--;
b--;

console.log(b);

// Comparison Opeartors - Will give us a boolean data type //

// "!" sign - for boolean data types, reverse the value

console.log(!(8 > 3));

// 1. Strict equal

console.log(5 === 5);
console.log(5 === 8);

// 2. Not Strict equal

console.log(5 !== 5);
console.log(5 !== 8);

// 3. Greater than

console.log(20 > 12);

// 4. Less than

console.log(30 < 20);

// 5. Greater than or equal

console.log(8 >= 4);
console.log(8 >= 8);

// 6. Less than or equal

console.log(10 <= 10);
console.log(12 <= 20);

// Logical Operators //

// 1. && (and) operator - Returns true only if both conditions are true.

if (5 > 3 && 2 < 4) {
  console.log("Hi, NYC!");
}

// Does not print anything becuase one of the condition is false.
if (5 > 3 && 8 < 4) {
  console.log("Hi, NYC!");
}

if (8 > 6 && "Hello") {
  console.log("Hello Muhammad!");
}

console.log(0 && "Hello");

// 2. || (or) operator - Returns true if at least one of the condition is true.

if (5 > 3 || 2 < 4) {
  console.log("Hi, Idaho!");
}

if (5 > 3 || 8 < 4) {
  console.log("Hi, Chicago!");
}

if (80 > 100 || 70 > 90) {
  console.log("Hi, Texas!");
}
