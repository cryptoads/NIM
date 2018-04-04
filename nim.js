var player = 'player 1';
var winner = false;
var playerChoice = 0;
rocks = ['@','@','@','@','@','@','@','@','@','@','@','@','@','@','@','@'];

function printRocks() {
    console.log(rocks);
    console.log('**************');
}

function checkPile(pile){
    return rocks[pile];
}

function checkWinner(rocks){

 if(rocks.length <= 3 ){
    alert(player + ' wins');
    winner = true;
    }

}

function roboPlay(){
  alert(player + " has chosen "+ (4-Number(playerChoice)) + " rocks")
  for(var i=0; i < (4 - Number(playerChoice)); i++ ){
    rocks.pop();
  }

  player = 'player 1';
}

function pickRocks(){
   if (player === 'player 1'){
    alert(player + "'s turn. There are "+ rocks.length+" left.");
    var numRocks = prompt("Number Of rocks? 1-3");
        if(numRocks <= rocks.length && numRocks <= 3 && numRocks >= 1){
          for(var i = 0; i < numRocks; i++){
              rocks.pop();
            }
            playerChoice = numRocks;
            player = 'player 2';
    }else{
        alert('bad selection');
    }

    checkWinner(rocks);
    printRocks();
}else{
  roboPlay();
}
}


while(winner === false){
    pickRocks();
}
