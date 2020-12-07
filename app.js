const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Meomory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);