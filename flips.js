import defaultExport from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const num = args.number || 1;

var output1 = defaultExport.coinFlips(num); 
var output2 = defaultExport.countFlips(output1); 

console.log(output1);
console.log(output2); 