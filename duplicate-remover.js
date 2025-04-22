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
const rollNo = [1,2,3,4,5,6,1,3,7,8,5,8,9,10]
const uniqueRoll = duplicateRemove(rollNo);
const uniqueFriends = duplicateRemove(friendsList)
console.log( uniqueRoll)
console.log(uniqueFriends)