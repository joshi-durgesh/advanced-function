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

//closure
//every function is closure

let userName = "durgesh";
function greetUser() {
  let name = userName;
  console.log("Hi " + name);
}

userName = "joshi";
greetUser();

//recursion function calling itself is know as recursion

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  if (n === 1) {
    return x;
  }
  return x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2*2*2

//recursion advance
const myself = {
  name: "Durgesh",
  freinds: [
    {
      name: "Praveen",
      freinds: [
        {
          name: "Aman",
          freinds: [
            {
              name: "saras",
            },
          ],
        },
      ],
    },
    {
      name: "Ashish",
    },
  ],
};

function getFreindsNames(person) {
  const collectedNames = [];

  if (!person.freinds) {
    return [];
  }

  for (const freind of person.freinds) {
    collectedNames.push(freind.name);
    collectedNames.push(...getFreindsNames(freind));
  }

  return collectedNames;
}

console.log(getFreindsNames(myself));
