let count = 0;

function onClick() {
    player1 = document.getElementById("firstPlayer").value;
    player2 = document.getElementById("secondPlayer").value;
    document.getElementById('printPlayer1').style.visibility='visible';
    document.getElementById('printPlayer1').innerHTML = "Jogador 1: <span style='color: #d56776; text-transform: uppercase;'>" + player1 + '</span>';
    document.getElementById('printPlayer2').style.visibility='visible';
    document.getElementById('printPlayer2').innerHTML = "Jogador 2: <span style='color: #d56776; text-transform: uppercase;'>" + player2 + '</span>';
    document.getElementById('button-start').style.visibility='visible';
}

function onClickStart() {
    document.getElementById('players').style.display='none';
    document.getElementById('game').style.display='block';
    players = [player1, player2];
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[0];
}

function onClickPos1() {
    vez = count % 2;
    if(vez == 0) {
        document.getElementById('pos1p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos1p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[(vez + 1) % 2];
}

function onClickPos2() {
    vez = count % 2;
    if(vez == 0) {
        document.getElementById('pos2p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos2p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[(vez + 1) % 2];
}

function onClickPos3() {
    vez = count % 2;
    if(count % 2 == 0) {
        document.getElementById('pos3p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos3p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[(vez + 1) % 2];
}

function onClickPos4() {
    vez = count % 2;
    if(count % 2 == 0) {
        document.getElementById('pos4p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos4p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[(vez + 1) % 2];
}

function onClickPos5() {
    vez = count % 2;
    if(count % 2 == 0) {
        document.getElementById('pos5p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos5p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[(vez + 1) % 2];
}

function onClickPos6() {
    vez = count % 2;
    if(count % 2 == 0) {
        document.getElementById('pos6p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos6p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[(vez + 1) % 2];
}

function onClickPos7() {
    vez = count % 2;
    if(count % 2 == 0) {
        document.getElementById('pos7p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos7p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[(vez + 1) % 2];
}

function onClickPos8() {
    vez = count % 2;
    if(count % 2 == 0) {
        document.getElementById('pos8p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos8p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[(vez + 1) % 2];
}

function onClickPos9() {
    vez = count % 2;
    if(count % 2 == 0) {
        document.getElementById('pos9p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos9p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #d56776; text-transform: uppercase;'>" + players[(vez + 1) % 2];
}

function myfunc() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9;
    p1 = document.getElementById('pos1p').innerHTML;
    p2 = document.getElementById('pos2p').innerHTML;
    p3 = document.getElementById('pos3p').innerHTML;
    p4 = document.getElementById('pos4p').innerHTML;
    p5 = document.getElementById('pos5p').innerHTML;
    p6 = document.getElementById('pos6p').innerHTML;
    p7 = document.getElementById('pos7p').innerHTML;
    p8 = document.getElementById('pos8p').innerHTML;
    p9 = document.getElementById('pos9p').innerHTML;
    if((p1 == 'X' && p2 == 'X' && p3 == 'X') || (p4 == 'X' && p5 == 'X' && p6 == 'X') || (p7 == 'X' && p8 =='X' && p9 == 'X') ||
    (p1 == 'X' && p4 == 'X' && p7 == 'X') || (p2 == 'X' && p5 == 'X' && p8 == 'X') || (p3 == 'X' && p6 == 'X' && p9 == 'X') ||
    (p1 == 'X' && p5 == 'X' && p9 == 'X') || (p3 == 'X' && p5 == 'X' && p7 == 'X')) {
        document.getElementById("text").innerHTML = "Jogador " + players[0] + " ganhou!";
        document.getElementById("endGame").style.visibility = 'visible';
    } else if((p1 == 'O' && p2 == 'O' && p3 == 'O') || (p4 == 'O' && p5 == 'O' && p6 == 'O') || (p7 == 'O' && p8 =='O' && p9 == 'O') ||
    (p1 == 'O' && p4 == 'O' && p7 == 'O') || (p2 == 'O' && p5 == 'O' && p8 == 'O') || (p3 == 'O' && p6 == 'O' && p9 == 'O') ||
    (p1 == 'O' && p5 == 'O' && p9 == 'O') || (p3 == 'O' && p5 == 'O' && p7 == 'O')) {
        document.getElementById("text").innerHTML = "Jogador " + players[1] + " ganhou!";
        document.getElementById("endGame").style.visibility = 'visible';
    } else if((p1 == 'X' || p1 == 'O') && (p3 == 'X' || p3 == 'O') && (p3 == 'X' || p3 == 'O') && (p4 == 'X' || p4 == 'O') && 
    (p5 == 'X' || p5 == 'O') && (p6 == 'X' || p6 == 'O') && (p7 == 'X' || p7 == 'O') && (p8 == 'X' || p8 == 'O') &&
    (p9 == 'X' || p9 == 'O')) {
        document.getElementById("text").innerHTML = "Empate!";
        document.getElementById("endGame").style.visibility = 'visible';
    }
}

function reset() {
    location.reload();
    document.getElementById("p1").innerHTML = '';
    document.getElementById("p2").innerHTML = '';
    document.getElementById("p3").innerHTML = '';
    document.getElementById("p4").innerHTML = '';
    document.getElementById("p5").innerHTML = '';
    document.getElementById("p6").innerHTML = '';
    document.getElementById("p7").innerHTML = '';
    document.getElementById("p8").innerHTML = '';
    document.getElementById("p9").innerHTML = '';
}