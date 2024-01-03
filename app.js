//pure function

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 5)); //this will return same for every time we reload

//impure function

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(6)); //this will be diffrent every time we reload we cant predict the return value

//side effect

let previousResult = 0;
function addAnother(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(previousResult);
console.log(addAnother(4, 6));
console.log(previousResult);
