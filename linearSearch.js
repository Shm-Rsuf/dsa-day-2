// given an array, [1, 5, 14, 7, 9]
// a target element

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 5, 14, 7, 9], 7)); //3
console.log(linearSearch([1, 5, 14, 7, 9], 6)); //-1

//O(n)==>linear complexcity
