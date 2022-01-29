const fs = require("fs");
if (fs.existsSync("./aa")) {
    console.log("Found aa file!");
} else {
    console.log("Did not find file!");
}