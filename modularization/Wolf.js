class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    console.log('Awuuuuu!\nWolf Win!');
  }
}

module.exports = Wolf; // TODO 2