let coin = document.querySelector("#coin");
let heads = document.querySelector("#heads");
let tails = document.querySelector("#tails");

let headOrTails = ["heads", "tails"];
let numArr = [1, 2];

tails.classList.add("hidden");
heads.classList.add("hidden");


document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();

    if (Math.floor(Math.random() * 3) === numArr[0]) {
        console.log(`${headOrTails[0]} won`);
        heads.style.color = "red";
        heads.classList.remove("hidden");
        tails.classList.add("hidden");
    } else {
        console.log(`${headOrTails[1]} won`);
        tails.style.color = "red";
        tails.classList.remove("hidden");
        heads.classList.add("hidden");
    }     
})
