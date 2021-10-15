let coin = document.querySelector("#coin");
let heads = document.querySelector("#heads");
let tails = document.querySelector("#tails");

let headOrTails = ["heads", "tails"];
let numArr = [1, 2];

if (Math.floor(Math.random() * 2) === numArr[0]) {
    console.log(`${headOrTails[0]} won`);
    heads.style.color = "red";
    tails.style.display = "none";
} else {
    console.log(`${headOrTails[1]} won`);
    tails.style.color = "red";
    heads.style.display = "none";
}

form = document.querySelector("#form");
startButton = document.querySelector("#start-button");

form.addEventlistener("click", (event)=>{
    event.preventDefault();

    
})