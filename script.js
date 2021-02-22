let newBid = document.getElementById('leftText').value;
let arr=[];
console.log(newBid)
function updateBid (num) {
    
    arr.push(num)
    console.log(arr);
}
document.getElementById('leftForm').addEventListener('click', updateBid());
console.log(arr)
