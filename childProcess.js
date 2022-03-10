let cp = require('child_process');
console.log(cp);



// Open a calculator

//cp.execFileSync("Calc");

let content = cp.execSync("node test.js");
console.log("Output of test Js file :  " + content);
console.log(" "+content);

