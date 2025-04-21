function multifly(a,b,c,d){
    return a*b*c*d;
}
// const result = multifly(2,3,4,5)
// console.log(result)
function multiflyAll(...numbers){
    return numbers.reduce((total, num) => total * num, 1);
}
// const result = multiflyAll(2,3,4,5);
// console.log(result);

function playWithNumbers(num){
    if(num %2 === 1 ){
        return num*2;
    }
    else{
        return num / 2;
    }
}
const result = playWithNumbers(120);
console.log(result)