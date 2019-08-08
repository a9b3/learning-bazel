const fs = require("fs");
const path = require("path");

require("jsscripts/scripts/use-shared");

// function walk(dir) {
//   fs.readdirSync(dir).forEach(fp => {
//     const fullPath = path.join(dir, fp);
//     if (fs.statSync(fullPath).isDirectory()) {
//       walk(fullPath);
//     } else {
//       // console.log(path.relative(process.cwd(), fullPath));
//       console.log(fullPath);
//     }
//   });
// }
//
// console.log({
//   NODE_PATH: process.env.NODE_PATH,
//   cwd: process.cwd(),
//   filename: __filename,
//   dirname: __dirname
// });
// walk(process.cwd());
