// Iteration

let array = [];
console.log(fibsRec(8));

function fibs(n) {
  const arr = [];
  let num1 = 0;
  let num2 = 1;
  let result = 0;

  for (let i = 1; i < n; i++) {
    result = num1 + num2;
    if (arr.length === 0) {
      arr.push(num1);
      arr.push(num2);
    } else {
      arr.push(result);
    }
    num2 = num1;
    num1 = result;
  }

  return arr;
}

function fibsRec(n) {
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  }
  // Esta merda não funciona..........
  return array[n] = fibsRec(n - 1) + fibsRec(n - 2);
}
