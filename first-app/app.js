const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`totalMemory: ${totalMemory}`);
console.log(`freeMemory: ${freeMemory}`);
