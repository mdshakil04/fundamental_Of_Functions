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
console.log(numResult)