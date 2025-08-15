const fs = require("fs");
const csso = require("csso");

const inputPath = "in-development/head-styles.css";
const outputPath = "in-production/head-styles.min.css";

fs.readFile(inputPath, "utf8", (err, data) => {
  if (err) throw err;
  const minified = csso.minify(data).css;
  fs.writeFile(outputPath, minified, (err) => {
    if (err) throw err;
    console.log("Head CSS minified successfully!");
  });
});