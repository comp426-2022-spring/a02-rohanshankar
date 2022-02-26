import defaultExport from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
args['call']
const guess = args.call; 

if (call == "tails" || call == "heads") {
    var output1 = defaultExport.flipACoin(guess); 
    console.log(output1); 
} else {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]"); 
}