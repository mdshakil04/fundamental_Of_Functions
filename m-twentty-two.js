function inchToFeet(inch){
    const result = inch / 12;
    return result;
}
function inchToFeetv2(inch){
    const feet = Math.floor(inch / 12)
    const inches = inch % 12;
    // result = feet + " feet " + inches + "Inch"
    const  result = feet + " feet " + inches + " Inch"
    return result;
}

const result = inchToFeetv2(65)
console.log(result)