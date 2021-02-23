let bidArr = [];
bidArr.push(1);
console.log(bidArr);

function updateBid(element ,bid) {

    element.innerText = bid;
}
let currentBid = document.getElementById('currentBid')
let leftButton = document.getElementById('leftSub');
let rightButton = document.getElementById('rightSub');
let currentBidVal = 0;
let leftInputVal;
let rightInputVal;

// console.log(leftInputVal);
leftButton.addEventListener('click', updateArr => {
    leftInputVal = document.getElementById('leftText').valueAsNumber;
    if (leftInputVal > currentBidVal) {
        bidArr.push(leftInputVal);
        console.log(bidArr);
        currentBidVal = leftInputVal;
        updateBid(currentBid, leftInputVal);
    } else {
        alert("Your bid must be greater than current bid");
    }
});
rightButton.addEventListener('click', updateArr => {
    rightInputVal = document.getElementById('rightText').valueAsNumber;
    bidArr.push(rightInputVal);
    console.log(bidArr);
    updateBid(rightInputVal);
});




// let newBid = document.getElementById('leftText').value;
// let arr=[];
// console.log(newBid)
// function updateBid (num) {
    
//     arr.push(num)
//     console.log(arr);
// }
// document.getElementById('leftSub').addEventListener('click', updateBid(arr));
// console.log(arr)
