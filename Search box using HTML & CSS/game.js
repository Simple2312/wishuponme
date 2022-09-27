const password = () => {
    let optionsName = prompt("Enter the password? tw-fs");
    if (optionsName.toLowerCase() == "2309"){
      clueChoice();
    return;
 }else 
    {
        alert("Game over mate");
        badEndingTwo();
        return;}}

const clueChoice = () => {
    let clueOptions = prompt("Did the poison kill chae?");
    if (clueOptions.toLowerCase() == "yes") {
       
        who(); 
        return;
    }else {
        if (clueOptions.toLowerCase() == "no"){
            alert("Ok then!!");
            otherChoice();
            return;
        }}}
        const otherChoice = () => {
            let otherClue = prompt("What could have killed her?");
            let weapon = ["knife","axe","fire","tie","gun"];
            for(let i =0;i < weapon.length;i++){
            if(otherClue.toLocaleLowerCase() == weapon[i]){
                alert("It was a trick to trap you!Game Over");
                badEnding();
                return;
             } 
            }
               alert("Try Again!");
               return;
   }
   
    const who = () => {
        let optionsName = prompt("Was it Tzuyu, sana, mina or Jihyo?");
        if (optionsName.toLowerCase() == "mina"){
          room();
        return;
     }else {
        if (optionsName.toLowerCase() == "tzuyu" || "jihyo" || "sana"){
            alert("Game over mate");
            badEndingTwo();
            return;}}}
const startGame = () => {
    var close = document.getElementsByClassName("closebtn");
var i;


for (i = 0; i < close.length; i++) {
  
  close[i].onclick = function(){

 
    var div = this.parentElement;

    
    div.style.opacity = "0";

  
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
    
    password();
}
document.getElementById("startBtn");
let button = document.getElementById("startBtn");
button.addEventListener("click", () => {
    startGame();
});
const room = () => {
    let guess = prompt("Yes! but the question is where? ");
    let guessRoom = ["bathroom","bedroom","hall","kitchen","han river"];
    for(let i=0;i < guessRoom.length;i++){
        if(guess.toLocaleLowerCase() == "kitchen"){
            winner();
            return;
        }
        alert("you are too close!Try again");
        room();    
    }
}
const winner = () =>{
    alert("Congrats!You are the winner!!! now you can search for the code 435 on screen. ");
    playAgain();
}
const playAgain = () =>{
    let ans =prompt("would you like to play again?")
    if(ans.toLocaleLowerCase() == "yes"){
        startGame();

    }else {
        alert("Thank you! hope you have enjoyed the game :)")
       window.location.href="https://www.youtube.com/watch?v=IOHawnX7hgk";
    }
}