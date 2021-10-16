let coin = document.querySelector("#coin");

document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();

    coin.style.animationPlayState = "running";

    const timeNum = (Math.floor(Math.random() * 10) + 1) * 1000;

    setTimeout(function(){
        coin.style.animationPlayState = "paused";
    }, timeNum);
})