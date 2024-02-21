const fs = require("fs");

fs.readFile("../../data/test.txt", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);

    // Delete the file after successfully reading it
    fs.unlinkSync("../../data/test.txt");
  }
});
