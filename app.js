/*let someBool = 3 < 2;
let someBooleans = 10;

!someBool
  ? console.log("program runs")
  : someBool === someBooleans
  ? console.log("rambool is falls,program fild")
  : someBool !== someBooleans;*/

function addNumber(num1, num2) {
  let someGlobalNumber = 5;
  let sum = num1 + num2 + someGlobalNumber;
  function addMoreNumbers() {
    let someGlobalNumber = 2;
    let secondSum = sum * someGlobalNumber;
    console.log(secondSum);
  }
  addMoreNumbers();
  return sum;
}

console.log(addNumber(3, 4));
