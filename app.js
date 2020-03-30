var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box8 = document.querySelector('#box8');
var box12 = document.querySelector('#box12');
var box16 = document.querySelector('#box16');
var box15 = document.querySelector('#box15');
var box14 = document.querySelector('#box14');
var box13 = document.querySelector('#box13');
var box9 = document.querySelector('#box9');
var box5 = document.querySelector('#box5');


var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
const arrdiv = [box1, box2, box3, box4, box8, box12, box16, box15, box14, box13, box9, box5]
console.log(board)

const player1_Button = document.getElementById('player-1');
const player2_Button = document.getElementById('player-2');

console.log(player1_Button);
console.log(player2_Button);

player1_Button.addEventListener('click', rollDice_1);

var player1 = ["Amar", 0, 1000];


function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player one rolls", position);
    changePosition_1(player1[1], position);
}
var count = 0;

function changePosition_1(old, currentPos) {
    count++;
    var newPosition = old + currentPos;
    player1[1] = newPosition;
    newPosition = newPosition % 11;
    // changing image position
    var img = document.getElementById("img1");
    img.style.visibility = 'hidden';
    console.log("count" + count);
    if (count > 1) {
        var elem = document.getElementById("img11");
        elem.remove();
    }
    let template = '<img src="assets/redcone.jfif" id="img11" alt="red" style=width:36px; '
    arrdiv[newPosition].innerHTML += template;


    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length)
        updateMoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log(updateMoney);
}




player2_Button.addEventListener('click', rollDice_2);

var player2 = ["Pinky", 0, 1000];

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player two rolls", position);
    changePosition_2(player2[1], position);
}
var count2 = 0;

function changePosition_2(old, currentPos) {
    count2++;
    var newPosition = old + currentPos;
    player2[1] = newPosition;
    newPosition = newPosition % 11;
    // changing image position
    var img = document.getElementById("img2");
    img.style.visibility = 'hidden';
    console.log("count" + count);
    if (count2 > 1) {
        var elem = document.getElementById('img12');
        elem.remove();
    }
    let template = '<img src="assets/yellowcone.jfif" id="img12" alt="yellow" style=width:36px; '
    arrdiv[newPosition].innerHTML += template;
    console.log(player2[1]);
    updateMoney_2(player2[1]);
}

function updateMoney_2(p2) {
    var updateMoney = 0;
    if (p2 < board.length)
        updateMoney = player2[2] - board[p2 - 1];
    else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
    }
    console.log(updateMoney);
}