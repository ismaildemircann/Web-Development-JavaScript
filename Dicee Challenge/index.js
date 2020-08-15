document.querySelector(".btn").addEventListener("click", function() {
    rollTheDice()
});

function rollTheDice() {
    var randomNumer1 = Math.floor(Math.random() * 6) + 1;
    var randomNumer2 = Math.floor(Math.random() * 6) + 1;
    
    var randomImageSource1 = "images/dice" + randomNumer1 + ".png";
    var randomImageSource2 = "images/dice" + randomNumer2 + ".png";
    
    document.querySelector(".img1").setAttribute("src", randomImageSource1);
    document.querySelector(".img2").setAttribute("src", randomImageSource2);
    
    if(randomNumer1 > randomNumer2)
        document.querySelector("h1").innerText = "🚩 Player 1 Wins!"
    else if(randomNumer1 < randomNumer2)
        document.querySelector("h1").innerText = "Player 2 Wins! 🚩"
    else
        document.querySelector("h1").innerText = "Draw!"
}