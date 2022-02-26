import defaultExport from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
args['number']
const tosses = args.number || 1;

var output1 = defaultExport.coinFlips(tosses); 
var output2 = defaultExport.countFlips(output1); 

console.log(output1);
console.log(output2); 