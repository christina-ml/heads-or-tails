let coin = document.querySelector("#coin");
let side = document.querySelector("#side");

let headOrTails = ["heads", "tails"];
let numArr = [1, 2];

document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();

    coin.style.animationPlayState = "running";


    const timeNum = (Math.floor(Math.random() * 10) + 1) * 1000;
    console.log(timeNum);


    setTimeout(function(){
        coin.style.animationPlayState = "paused";
    }, timeNum);

    // if (Math.floor(Math.random() * 3) === numArr[0]) {
    // } else {
    // }
})


// 1000 = tails
// 2000 = heads
// 3000 = tails (2 flips)
// 4000 = heads (2 flips)