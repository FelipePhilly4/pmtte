export default class Round {
  constructor(players, round) {
    this.players = players;
    this.currentRound = round || 1;
    this.elConsole = document.getElementById('console');
    this.currentPlayer = 0;

    // Auto-initialisation de l'objet
    this.init();
  }

  init() {
    for (let player = 0; player < this.players.length; ++player) {
      this.players[player].reset();
    }

    // On affiche dans l'élément HTML #console le round courant
    this.elConsole.innerHTML = '<h2>Round ' + this.currentRound + '<br><span class="currentPlayer"></span></h2>';

    this.elCurrentPlayer = this.elConsole.querySelector('.currentPlayer');

    // Lancement du tour du premier joueur
    this.turn();
  }

  turn() {
    this.elCurrentPlayer.innerText = 'New turn for ' + this.players[this.currentPlayer].name + '!';
    this.players[this.currentPlayer].elPush.style.display = 'block';
    this.players[this.currentPlayer].setTime();
    this.players[this.currentPlayer].elPush.addEventListener('mouseup', this.endTurn.bind(this));
  }

  endTurn() {
    if (this.players[this.currentPlayer] === undefined) return;
    
    this.players[this.currentPlayer].elPush.style.display = 'none';
    if (this.players[++this.currentPlayer] !== undefined) {
      this.turn();
    } else {
      this.endRound();
    };
  }

  endRound() {
    let self = this;
    ++this.currentRound;
    this.elConsole.innerHTML = '<button class="next btn btn--bordered">Round ' + this.currentRound + '</button>';

    this.elConsole.querySelector('.next').addEventListener('click', function () {
      new Round(self.players, self.currentRound);
    });
  }
}