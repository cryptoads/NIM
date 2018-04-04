var player = 'player 1';
var winner = false;
rocks = [['@','@','@','@'],['@','@','@','@'],['@','@','@','@'],['@','@','@','@']];

function printRocks() {
    console.log(rocks[0]);
    console.log(rocks[1]);
    console.log(rocks[2]);
    console.log(rocks[3]);
}

function checkPile(pile){
    return rocks[pile];
}

function checkWinner(rocks){
 if(rocks.join(',').replace(/\,/g, "").length <= 3){
    alert(player + 'wins');
    winner = true;
 }
}

function pickRocks(){
    alert(player + "'s turn");
    var pilePicked = prompt("Pick a pile ");
    var numRocks = prompt("Number Of rocks? 1-3");
    if (rocks[pilePicked].includes('@')){
        if(numRocks <= rocks[pilePicked].join(',').replace(/\,/g, "").length && numRocks <= 3 && numRocks >= 1){
        for(var i = 0; i < numRocks; i++){
            rocks[pilePicked].pop();
            if(player === 'player 1'){
            player = 'player 2';
        }else{
            player='player 1';
        }
        }
    }else{
        alert('bad selection');
    }
    }else{
        alert('bad selection');
    }
    checkWinner(rocks);
    printRocks();
}

while(winner === false){
    pickRocks();
}