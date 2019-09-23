const fs = require("fs");
const path = require("path");

btnSubmit = document.getElementById("submit");
company = document.getElementById("company");
name = document.getElementById("name");
designation = document.getElementById("designation");
email = document.getElementById("email");

filename = "registered.csv";
pathName = path.join(__dirname, "Files");

btnSubmit.addEventListener("click", function() {
  let file = path.join(pathName, filename);
  let contents =
    contents +
    fs.readFile(file, function(err, data) {
      if (!!err) {
        console.log("no file");
        data = "";
      }
      let contents =
        data +
        `${name.value}\t${company.value}\t${designation.value}\t${email.value}\n`;
      fs.writeFile(file, contents, function(err) {
        if (!!err) {
          return console.error(err);
        }
        console.log("created");
      });
    });
});
