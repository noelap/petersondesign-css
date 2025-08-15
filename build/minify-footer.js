const fs = require("fs");
const csso = require("csso");

const inputPath = "in-development/footer-styles.css";
const outputPath = "in-production/footer-styles.min.css";

fs.readFile(inputPath, "utf8", (err, data) => {
  if (err) throw err;
  const minified = csso.minify(data).css;
  fs.writeFile(outputPath, minified, (err) => {
    if (err) throw err;
    console.log("Footer CSS minified successfully!");
  });
});