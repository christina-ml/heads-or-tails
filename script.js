let coin = document.querySelector("#coin");
let side = document.querySelector("#side");

let headOrTails = ["heads", "tails"];
let numArr = [1, 2];

document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();

    if (Math.floor(Math.random() * 3) === numArr[0]) {
        coin.style.backgroundImage = "url('./assets/heads.png')";
        coin.style.backgroundSize = "contain";
    } else {
        coin.style.backgroundImage = "url('./assets/tails.png')";
        coin.style.backgroundSize = "contain";
    }
})
