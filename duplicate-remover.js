function duplicateRemove(array){
    // console.log(array)
    const finalList = [];
    for(const item of array){
        // console.log(item)
        if(finalList.includes(item)=== false){
            finalList.push(item)
            // console.log(finalList)
        }
    }
    return finalList;
}
const friendsList = ["Sofiq", "Sobuj", "Sobuj", "Mizan","Sofiq", "Zahid", "Anowar", "Sobuj"];
const finalList = duplicateRemove(friendsList);
console.log("Final list of my Friends is ", finalList)