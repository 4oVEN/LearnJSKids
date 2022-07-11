function startGame(){
  gameLoop();
}
  let loops = 0;
  let peopleVisible = false;
  let gameScore = 0;

  function gameLoop(){
    peopleVisible = !peopleVisible;
    createCharacters();
    loops++;
    if (loops < 12){
      setTimeout(gameLoop, 3000);
    }
    else{
      alert('Твой счет ' + gameScore);
    }
 }
  function createCharacters(){
    let board = document.getElementById('board');
    let classToSet = peopleVisible ? 'character visible' : 'character hidden';
    for (let i = 0; i < 6; i++) {
      board.children[i].className = classToSet; 
      board.children[i].innerHTML = 'Гость';
      board.children[i].onclick = function(){
        gameScore += -2;
      }
    }
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    board.children[randomNumber-1].innerHTML = 'Вор';
    board.children[randomNumber-1].onclick = function(){
      gameScore++;
    }
  }
 