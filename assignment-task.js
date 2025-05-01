const income = 50000;
const expense = 10000;
function calculateTax(i, e){
    
    if(i < 0 || e < 0){
        console.log("Please! enter positive number")
    }
    else if(typeof i !== "number" || typeof e !== "number" ){
        console.log("You have to enter number")
    }
    else if(i < e){
        console.log("Cut your coat according to your cloth")
    }
    else{
        const savings = i - e;
        const tax = savings * 0.2
        return tax
    }
}
const result = calculateTax(income, expense)
console.log(result)