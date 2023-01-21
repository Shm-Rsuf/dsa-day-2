/* function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 4, 8, 11], 11)); //4
console.log(binarySearch([1, 3, 4, 8, 11], 14)); //-1 */

/* function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
} */

/* console.log(binarySearch([1, 3, 4, 8, 11], 11)); //4
console.log(binarySearch([1, 3, 4, 8, 11], 14)); //-1 */

function binarysearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarysearch([1, 2, 3, 4, 5, 7, 8, 9], 7));
console.log(binarysearch([1, 2, 3, 4, 5, 7, 8, 9], 70));
