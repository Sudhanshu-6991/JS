"C:\Users\sudha\Desktop\FJP-6\Module2\Node\Path.js"


let path = require("path");
//console.log(path);

let extensionname =  path.extname("C:\Users\sudha\Desktop\FJP-6\Module2\Node\Path.js");
//console.log(extensionname)

let basename = path.basename(__filename);
console.log(basename);

console.log(__dirname);
console.log(__filename);


let dirName = __dirname;
console.log(dirName);

let NewFilePath = path.join(dirName, "test.js");
console.log(NewFilePath);