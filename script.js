let coin = document.querySelector("#coin");
let side = document.querySelector("#side");

let headOrTails = ["heads", "tails"];
let numArr = [1, 2];

document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();

    if (Math.floor(Math.random() * 3) === numArr[0]) {
        console.log(`${headOrTails[0]} won`);
        // side.textContent = "Heads";
        // side.style.color = "grey";
        coin.style.backgroundImage = "url('./assets/heads.png')";
        coin.style.backgroundSize = "contain";
    } else {
        console.log(`${headOrTails[1]} won`);
        // side.textContent = "Tails";
        // side.style.color = "grey";
        coin.style.backgroundImage = "url('./assets/tails.png')";
        coin.style.backgroundSize = "contain";
    }
})
