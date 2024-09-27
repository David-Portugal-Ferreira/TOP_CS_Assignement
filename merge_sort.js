const case_1 = [3, 2, 1, 13, 8, 5, 0, 1];
const case_2 = [105, 79, 100, 110];

console.log(mergeSort(case_1));
console.log(mergeSort(case_2));

function mergeSort(arr) {
  let sortedArr = [];
  let leftArr = arr.slice(0, arr.length / 2);
  let rigthArr = arr.slice(arr.length / 2);

  if (leftArr.length > 1) {
    leftArr = [...mergeSort(leftArr)];
  }
  if (rigthArr.length > 1) {
    rigthArr = [...mergeSort(rigthArr)];
  }

  while (leftArr.length >= 1) {
    if (leftArr[0] > rigthArr[0]) {
      sortedArr.push(rigthArr[0]);
      rigthArr.shift();
    } else {
      sortedArr.push(leftArr[0]);
      leftArr.shift();
    }
  }

  if(leftArr.length <=0 && rigthArr.length > 0) {
    sortedArr.push(...rigthArr);
  }

  return sortedArr;
}