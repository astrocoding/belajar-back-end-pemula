class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    console.log('Grrrr!\nTiger Win!');
  }
}

module.exports = Tiger; // TODO 1