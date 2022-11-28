
function clicked(){
    var number1=Math.floor(Math.random()*6)+1;
var diceValue="dice"+number1+".png"
document.querySelector(".img1").setAttribute("src",diceValue);
var number2=Math.floor(Math.random()*6)+1;
var diceValue2="dice"+number2+".png";
document.querySelector(".img2").setAttribute("src",diceValue2);
if(diceValue>diceValue2){
    document.querySelector("h1").innerHTML="⚑Player 1 Wins";
}
else if(diceValue<diceValue2){
    document.querySelector("h1").innerHTML="Player 2 Wins⚑";
}
else{
    document.querySelector("h1").innerHTML="⚑Draw⚑"
}
}