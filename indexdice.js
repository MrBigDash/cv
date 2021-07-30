var randomNumber1=Math.floor(Math.random()*6)+1
var randomNumber2=Math.floor(Math.random()*6)+1
var randomImage1="./images/dice"+randomNumber1+".png"
var randomImage2="./images/dice"+randomNumber2+".png"
document.querySelector(".img1").src=randomImage1
document.querySelector(".img2").src=randomImage2


if(randomNumber1<randomNumber2){document.querySelector("h1").innerHTML="player2 win"}
else if(randomNumber1>randomNumber2){document.querySelector("h1").innerHTML="player1 win"}
else{document.querySelector("h1").innerHTML="draw"}


