var player = 'player 1';
var winner = false;
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

function pickRocks(){
    alert(player + "'s turn. There are "+ rocks.length+" left.");
    var numRocks = prompt("Number Of rocks? 1-3");
        if(numRocks <= rocks.length && numRocks <= 3 && numRocks >= 1){
          for(var i = 0; i < numRocks; i++){
              rocks.pop();
              if(player === 'player 1'){
              player = 'player 2';
              }else{
              player='player 1';
            }}
    }else{
        alert('bad selection');
    }
    checkWinner(rocks);
    printRocks();
}

while(winner === false){
    pickRocks();
}
