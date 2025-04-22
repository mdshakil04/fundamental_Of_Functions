function oddAverage(numbers){
    const oddsArray = [];
    for(const number of numbers){
        if(number %2 === 1){
            // console.log(number)
            oddsArray.push(number)
            
        } 
    }
    // ------------For average of oddsArray-------------
    let sum = 0;
    for (const number of oddsArray){
       sum += number
    }
    
    const count = oddsArray.length
    const avg = sum / count;
    // console.log(avg)
    return avg


    // console.log(oddsArray)
    // for(let i = 0; i <= numbers.length; i++){
    //     console.log(i)
    // }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const avg = oddAverage(numbers)
console.log("Average of odd numbers in given array is", avg)