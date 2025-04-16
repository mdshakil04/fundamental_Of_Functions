function school(){
    // console.log("Wake up early in the morning")
}
school()
// Task 1
function multification(a,b, c, d){
    const gunon = a * b * c* d;
    // console.log(gunon)
}
multification(12, 5, 6, 7)

let num = 13
if(num % 2 === 0 ){
    let result = num / 2
    // console.log(result)
}else{
    let result = num * 2
    // console.log(result)
}
// --------------------
let num2 = 120;
if(num2 > 100){
    const result = num2 - 100;
    // console.log(result)
}else if(num2 >= 100){
    return num2 + 100;
    // console.log(result)
}
// -------------------------
function task1(num){
    if(num % 2 === 0 ){
        return num / 2
    }else{
        return num * 2
    }
}
const numResult = task1(53)
// console.log(numResult)
// ------Task2 by gpt
function task2(num){
    if( num % 3 === 0 && num % 5 === 0){
        // console.log("FizzBuzz")
        return "FizzBuzz";
    }else if(num % 3 === 0){
        // console.log("Fizz")
        return "Fizz";
    }else if ( num % 5 === 0){
        // console.log("Buzz")
        return "Buzz";
    }else{
        return "Try another number"
    }
}
const result = task2(30)
console.log(result)

