var randomNumber1 = Math.floor(Math.random()*6)+1; // 1-6
var randomNumber2 = Math.floor(Math.random()*6)+1; // 1-6

var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];


// Changing Player 1 Image
document.querySelector(".img1").setAttribute("src", images[randomNumber1-1]);

// Changing Player 2 Image
document.querySelector(".img2").setAttribute("src",images[randomNumber2-1]);

if(randomNumber1>randomNumber2){
    // Player 1 wins
    document.querySelector(".heading").innerHTML = "Player 1 🚩";
}
else if(randomNumber2>randomNumber1){
    // Player 2 wins
    document.querySelector(".heading").innerHTML = "🚩 Player 2 ";
}
else{
    // Draw
    document.querySelector(".heading").innerHTML = "Draw!";
}