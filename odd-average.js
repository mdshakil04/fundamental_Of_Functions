function oddAverage(numbers){
    // console.log(numbers)
    let sum = 0;

    for(const number of numbers){
        
        if(number %2 === 1){
             sum += number
            //  console.log(sum)
             let avg = sum / 5;
            
        } 
    }
    // for(let i = 0; i <= numbers.length; i++){
    //     console.log(i)
    // }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const avg = oddAverage(numbers)
console.log("Average of odd numbers in given array is", avg)