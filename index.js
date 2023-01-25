//Random Dice generate for player 1:-
//Random no generate
let randomNo1=Math.floor(Math.random()*6)+1;
//pic of dice change according to random no
let randomDiceImage1='DicePics/dice'+randomNo1+'.png';
//get image of player1 from DOM
let image1=document.querySelectorAll('img')[0];
//finally change the image1 according to random No
image1.setAttribute('src',randomDiceImage1);


//Random Dice generate for player 1:-
//Random no generate
let randomNo2=Math.floor(Math.random()*6)+1;
//pic fo dice change according to random no
let randomDiceImage2='DicePics/dice'+randomNo2+'.png';
//get image of player2 from DOM
let image2=document.querySelectorAll('img')[1];
//Change the image2 according to the random no
image2.setAttribute('src',randomDiceImage2);

//Check Which Player Win
if(randomNo1>randomNo2){
    document.querySelector('h1').innerHTML='Player1 Wins!'
}
else if(randomNo2>randomNo1){
    document.querySelector('h1').innerHTML='Player2 Wins!';
}
else{
    document.querySelector('h1').innerHTML='Draw!';
}