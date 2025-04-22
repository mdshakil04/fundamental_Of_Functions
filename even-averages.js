function evenAverage(numbers){
    // console.log(number)
    const evenArray = [];
    for(const number of numbers){
       if(number %2 === 0){
        // console.log(number)
        evenArray.push(number)
       }
    }
    let sum = 0;
    for(const number of evenArray){
        sum += number;
    }
    const count = evenArray.length;
    const avg = sum / count;
    return avg
    // console.log(avg)
    // console.log(evenArray)
    // console.log(sum)
}
const numbers = [1 ,2, 3, 4, 5, 6, 7, 8, 9]
const result = evenAverage(numbers)
console.log("The average of even number from given array is ", result)
