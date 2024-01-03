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

const hobbies = ["gaming", "watching movies"];
function newHobbie(h) {
  h.push("sleeping");
  return h;
}

console.log(newHobbie(hobbies));
console.log(hobbies);

//factory function
//function inside function is known as factory function

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));
