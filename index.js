const message = (nama) => {
  console.log(`Hello, ${nama}`);
}

message('Zaenal Alfian');

const objek_global = Object.getOwnPropertyNames(global);

const cpuInfo = process.memoryUsage();

console.log(cpuInfo);
