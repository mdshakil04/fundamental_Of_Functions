let x = "Bike";
let y = x;
// console.log(y)
y = "Car"
// console.log(x)
// console.log(y)
// ---------------------------
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log("This is from arr2 before push",arr2);

arr2.push(4);

console.log("This is from arr1 after push",arr1);
console.log("This is from arr2",arr2);