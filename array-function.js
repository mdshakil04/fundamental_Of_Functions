function sumOfArray(nums){
    let sum = 0;
    // console.log(nums)
    for(let i = 0; i < nums.length; i++ ){
       sum = sum + nums[i]
    }
    return sum;
}
const num = [12, 34, 54, 34, 13]
 const result = sumOfArray(num)
 console.log("The sum of array is ", result)