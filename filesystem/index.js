const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (err, data) => {
  if(err) {
    console.log('Gagal membaca berkas!');
    return;
  }

  console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);