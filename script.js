const againButton=document.querySelector('.again');
const checkButton=document.querySelector('.check');
const mainNumberInputField=document.querySelector('.number');
const inputField=document.querySelector('.input');
const messageField=document.querySelector('.message');
const scoreField=document.querySelector('.score');
const highScoreField=document.querySelector('.highscore');
let score=20;
let highScore;
let usedNumbersArray=new Array();
let mainNumber=getRandomNumber();
console.log(mainNumber);
function getRandomNumber() {
    let randomNumber = Math.random() * 20;
    randomNumber = Math.floor(randomNumber) + 1;
    return randomNumber;
}
checkButton.addEventListener('click', play);

function play () {
    if (inputField.value==""){
        messageField.innerHTML="enter number";
    }
    else {
        let guessNumber=inputField.value;
        if (guessNumber!=mainNumber && !usedNumbersArray.includes(guessNumber)) {
            usedNumbersArray.push(guessNumber);
            if(guessNumber>mainNumber) {
                messageField.innerHTML="too high";
            }
            else {
                messageField.innerHTML="too low";
            }
            score=score-1;
            scoreField.innerHTML=score;
        }
        else if (guessNumber!=mainNumber && usedNumbersArray.includes(guessNumber)) {
            messageField.innerHTML="already tried";
        }
        else if (guessNumber==mainNumber) {
            document.body.style.backgroundColor= "#055b05";
            inputField.style.backgroundColor="#055b05";
            mainNumberInputField.innerHTML=mainNumber;
            messageField.innerHTML="correct";
            localStorage.setItem("highScore", score);
            defineHighScore();
        }
    }
}
againButton.addEventListener('click', function () {
    score=20;
    messageField.innerHTML="Start guessing...";
    scoreField.innerHTML=20;
    inputField.value="";
    document.body.style.backgroundColor= "#222";
    inputField.style.backgroundColor= "#222";
    usedNumbersArray.length=0;
    mainNumberInputField.innerHTML="?";
    mainNumber=getRandomNumber();
    console.log(mainNumber);
})
function defineHighScore () {
    highScore=localStorage.getItem("highScore");
    if (Number(highScoreField.innerHTML)>highScore) {
        highScore=Number(highScoreField.innerHTML);
    }
    highScoreField.innerHTML=highScore;
}