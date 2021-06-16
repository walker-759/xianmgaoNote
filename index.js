function fun(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const element = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = element;
      }
    }
  }
  return arr;
}

// const arr = [3, 2, 5, 1]
// const a = fun(arr);
// console.log(a);


function fun() {

}
const arr = [true, false, true, false, true]
fun(arr);