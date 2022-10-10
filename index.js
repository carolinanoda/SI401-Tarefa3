let count = 0;

function onClick() {
    player1 = document.getElementById("firstPlayer").value;
    player2 = document.getElementById("secondPlayer").value;
    document.getElementById('printPlayer1').style.display='block';
    document.getElementById('printPlayer1').innerHTML = "Jogador 1: <span style='color: #ff004d; text-transform: uppercase;'>" + player1 + '</span>';
    document.getElementById('printPlayer2').style.display='block';
    document.getElementById('printPlayer2').innerHTML = "Jogador 2: <span style='color: #ff004d; text-transform: uppercase;'>" + player2 + '</span>';
    document.getElementById('button-start').style.display='block';
}

function onClickStart() {
    document.getElementById('players').style.display='none';
    document.getElementById('game').style.display='block';
    players = [player1, player2];
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[0];
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
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[vez];
}

function onClickPos2() {
    vez = count % 2;
    if(vez == 0) {
        p2 = 'X';
        document.getElementById('pos2p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos2p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[vez];
}

function onClickPos3() {
    vez = count % 2;
    if(count % 2 == 0) {
        p3 = 'X';
        document.getElementById('pos3p').innerHTML = "X";
        count++;
    }
    else {
        document.getElementById('pos3p').innerHTML = "O";
        count++;
    }
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[vez];
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
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[vez];
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
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[vez];
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
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[vez];
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
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[vez];
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
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[vez];
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
    document.getElementById('turn').innerHTML = "Vez de: <span style='color: #ff004d; text-transform: uppercase;'>" + players[vez];
}

clickOnce.addEventListener("click", myfunc());

function myfunc() {
    
}