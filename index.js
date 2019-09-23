const $ = require("jquery");
const fs = require("fs");
const path = require("path");
theForm = $("form");
btnSubmit = document.getElementById("submit");
company = document.getElementById("company");
namex = document.getElementById("namex");
designation = document.getElementById("designation");
email = document.getElementById("email");

filename = "registered.csv";
pathName = path.join(__dirname, "Files");

theForm.on("submit", function(e) {
  e.preventDefault();
  console.log(e);
});

btnSubmit.addEventListener("click", function() {
  let file = path.join(pathName, filename);
  fs.readFile(file, function(err, data) {
    if (!!err) {
      console.log("no file");
      data = "";
    }
    let contents =
      data +
      `${namex.value},${company.value},${designation.value},${email.value}\n`;
    fs.writeFile(file, contents, function(err) {
      if (!!err) {
        return console.error(err);
      }
      console.log("created");
    });
  });
});
