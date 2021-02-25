let bidArr = [];

console.log(bidArr);
function saveLocalStorage (arr) {
    localStorage.setItem('biddingArray', JSON.stringify(arr));
    let retrieve = JSON.parse(localStorage.getItem('biddingArray'));
    console.log(retrieve);
    
    return retrieve;
    
};

// function updateBid(element1, arr) {
//     let div = document.createElement('div');
//     let final;
//     for (let i = 1; i < arr.length-1; i++) {
//         final = div.appendChild(document.createTextNode(i))
        
//     }  
//         element1.innerText = final;
// }



// function updateBid(element1, arr) {
//     let clone = arr;
//     //let curBid = clone.shift()
//     //element1.innerText = curBid;
//     let rest = clone.slice();
//     element1.innerHTML = clone[0];
// }
function updateBid (element1, arr) {
  
        let bids = document.createElement('div');
        bids.innerHTML = arr[arr.length-1];
        element1.appendChild(bids);
};


// }
// function updateBid(element ,bid) {

//     element.innerText = bid;

// }


let currentBidHTML = document.getElementById('currentBid')
let currentArray = document.getElementById('array');
let leftButton = document.getElementById('leftSub');
let rightButton = document.getElementById('rightSub');
let leftForm = document.getElementById('leftForm');
let rightForm = document.getElementById('rightForm');
let currentBidVal = 0;
let leftInputVal;
let rightInputVal;
let retrieve = localStorage.getItem('biddingArray');
//updateBid(currentBidHTML, retrieve);
leftButton.addEventListener('click', updateArr => {
    leftInputVal = document.getElementById('leftText').valueAsNumber;
    if (leftInputVal > currentBidVal) {
        bidArr.push(leftInputVal);
        console.log(bidArr);
        saveLocalStorage(bidArr);
        let retrieve = saveLocalStorage(bidArr);
        updateBid(currentBidHTML, retrieve);
        currentBidVal = leftInputVal;
    } else {
        alert("Your bid must be greater than current bid");
    }
});
rightButton.addEventListener('click', updateArr => {
    rightInputVal = document.getElementById('rightText').valueAsNumber;
    if (rightInputVal > currentBidVal) {
        bidArr.push(rightInputVal);
        console.log(bidArr);
        saveLocalStorage(bidArr);
        let retrieve = saveLocalStorage(bidArr);
        updateBid(currentBidHTML, retrieve);
        currentBidVal = leftInputVal;
    } else {
        alert("Your bid must be greater than current bid");
    }
});
leftForm.addEventListener('submit', updateArr => {
    event.preventDefault();
    leftInputVal = document.getElementById('leftText').valueAsNumber;
    
    if (leftInputVal > currentBidVal) {
        bidArr.push(leftInputVal);
        console.log(bidArr);
        saveLocalStorage(bidArr);
        let retrieve = saveLocalStorage(bidArr);
        updateBid(currentBidHTML, retrieve);
        currentBidVal = leftInputVal;
        leftForm.reset();
    } else {
        alert("Your bid must be greater than current bid");
        leftForm.reset();
        
    }
    
});
rightForm.addEventListener('submit', updateArr => {
    event.preventDefault();
    rightInputVal = document.getElementById('rightText').valueAsNumber;
    if (rightInputVal > currentBidVal) {
        bidArr.push(rightInputVal);
        console.log(bidArr);
        saveLocalStorage(bidArr);
        let retrieve = saveLocalStorage(bidArr);
        updateBid(currentBidHTML, retrieve);
        currentBidVal = rightInputVal;
        rightForm.reset();
        
    } else {
        alert("Your bid must be greater than current bid");
        rightForm.reset();
        
    }
});
// rightButton.addEventListener('click', updateArr => {
//     rightInputVal = document.getElementById('rightText').valueAsNumber;
//     if (rightInputVal > currentBidVal) {
//         bidArr.push(rightInputVal);
//         console.log(bidArr);
//         currentBidVal = rightInputVal;
//         updateBid(currentBid, rightInputVal);
//     } else {
//         alert("Your bid must be greater than current bid");
//     }
// });




// let newBid = document.getElementById('leftText').value;
// let arr=[];
// console.log(newBid)
// function updateBid (num) {
    
//     arr.push(num)
//     console.log(arr);
// }
// document.getElementById('leftSub').addEventListener('click', updateBid(arr));
// console.log(arr)
// class PersonClass {
//     constructor(name) {
//         this.name = name;
//     }
//     greet () {
//         console.log("aloha");
//     }
// }
// class DeveloperClass extends PersonClass {
//     introduce() {
//         console.log(`Aloha, my name is ${this.name}`)
//     }
// }  