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
// let num = 1
// let num = 10;
// for(let i =1; i <= num; i++){
//     console.log(i)
    
// }
// const result = task2(30)
// console.log(result)
// -----------Task 3-------------------
function sumMultiples(num){
    let sum = 0;
    for(let i =1; i <= num; i++){
        if(i % 3 === 0 || i % 5 === 0){
             sum += i;
        }
    }
    return sum;
}
const result = sumMultiples(25);
console.log(result)
