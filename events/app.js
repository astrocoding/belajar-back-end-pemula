const { EventEmitter } = require('events'); // core module events

const myEventEmitter = new EventEmitter();

// Fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
}

const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
}

// Mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);


// Memicu event 'coffee-order' terjadi
myEventEmitter.emit('coffee-order', { name: 'Espresso', price: 15000 });

// TODO? Fungsi khusus untuk menangani event, 'handler' atau 'listener'

const iniEventEmitter = new EventEmitter();

const pesanKopi = (nama) => {
  console.log(`Kopi ${nama} telah dibuat!`);
}

const tagihKopi = (harga) => {
  console.log(`Tagihan sebesar ${harga} telah dibuat!`);
}

const onCoffeeOrderedListener = ({ nama, harga}) => {
  pesanKopi(nama);
  tagihKopi(harga);
}

iniEventEmitter.on('coffee-order', onCoffeeOrderedListener);
iniEventEmitter.emit('coffee-order', { nama: 'Tubruk', harga: 15000 });
