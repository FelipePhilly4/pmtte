import toastr from 'toastr';
import { type } from 'os';

export default class {
  constructor(name, elCard) {
    this.name = name || 'Anonyme';
    this.elCard = elCard;
    this.score = 0;
    this.time = 0;
    this.timeMin = 0.5;
    this.timeMax = 1.75;
    this.currentTime = 0;
    this.frameRate = 24;
  }

  // Génère le code html d'un Player
  create() {
    // On change le code HTML de la carte par une carte player
    this.elCard.innerHTML = '';
    this.elCard.innerHTML += '<h2>' + this.name + '</h2>';
    this.elCard.innerHTML += '<div class="time" style="display: none;">' + this.time + '</div>';
    this.elCard.innerHTML += '<div class="loader"><div class="load"><div class="currentTime">0</div></div></div>';
    this.elCard.innerHTML += '<button class="push btn btn--bordered" style="display: none;">Push and hold me!</button>';
    this.elCard.innerHTML += '<div>Score: <span class="score">' + this.score + 'pts</span></div>';


    // On stocke les nouveaux éléments HTML dans des propriétés de l'objet pour pouvoir jouer avec par la suite
    this.elTime = this.elCard.querySelector('.time');
    this.elLoader = this.elCard.querySelector('.loader');
    this.elLoad = this.elCard.querySelector('.load');
    this.elCurrentTime = this.elCard.querySelector('.currentTime');
    this.elPush = this.elCard.querySelector('.push');
    this.elScore = this.elCard.querySelector('.score');

    this.elPush.addEventListener('mousedown', this.push.bind(this));
    this.elPush.addEventListener('mouseup', this.release.bind(this));
  }

  // Met à jour les données sur l'interface utilisateur
  render() {
    // Utilisation du shorcut pour remplacer la propriété innerHTML de l'élément avec l'ID "time"
    this.elTime.innerText = this.time + 's';
    // Utilisation du shorcut pour remplacer la propriété innerHTML de l'élément avec l'ID "currentTime"
    this.elCurrentTime.innerText = this.currentTime + 's';
    // Utilisation du shorcut pour remplacer la propriété innerHTML de l'élément avec l'ID "score"
    this.elScore.innerText = this.score + 'pts';
  }

  // Gère la pression sur le bouton de la souris
  push() {
    let self = this;
    this.counter = setInterval(function () {
      // Mise à jour du compteur
      self.currentTime = Math.round((self.currentTime + self.frameRate / 1000) * 100) / 100;

      // Mise à jour de la hauteur de la barre
      if (self.elLoad.offsetHeight < self.elLoader.offsetHeight) {
        self.elLoad.style.height = self.elLoader.offsetHeight / self.time * self.currentTime + 'px';
      }

      // Mise à jour de l'interface utilisateur
      self.render();
    }, this.frameRate);
  }

  // Gère le relâchement de la pression sur le bouton de la souris
  release() {
    clearInterval(this.counter);

    if (this.currentTime > this.time) {
      toastr.warning('Too far!');
    }
    else {
      toastr.success('You won but you could\'ve stand ' + (Math.round((this.time - this.currentTime) * 100) / 100) + ' more seconds !');
    }

    this.points();
  }

  // Calcul des points à la fin d'un tour
  points() {
    let roundScore = 0;

    if (this.currentTime <= this.time / 2) {
      roundScore = 10;
    } else {
      if (this.currentTime > this.time) {
        roundScore = this.score / -2;
      }
      else {
        if (this.currentTime == this.time) {
          roundScore = 200;
          toastr.success('P.E.R.F.E.C.T.!');
        }
        else {
          let loadHeight = parseInt(this.elLoad.offsetHeight);
          let loaderHeight = parseInt(this.elLoader.offsetHeight);
          let x = (loadHeight - (loaderHeight / 2)) / (loaderHeight / 2) * 100;

          roundScore = Math.round(Math.exp((0.0460509) * x) * 100) / 100;
          roundScore = (roundScore <= 90) ? roundScore + 10 : roundScore;
        }
      }
    }

    this.score += roundScore;
    this.score = Math.round(this.score);

    this.render();
  }

  setTime() {
    // TODO Math.random() qui renvoi un chiffre en 0.5 et 1.75 avec Math.round()
    this.time = (Math.random() * (this.timeMax - this.timeMin) + this.timeMin).toFixed(2);
    this.elTime.style.display = 'block';
    this.render();
  }

  // Réinitialise les données pour un nouveau Round
  reset() {
    this.currentTime = 0;
    this.elLoad.style.height = 0;
    this.render();
  }
}