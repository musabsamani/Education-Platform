const path = require("path");
const fs = require("fs");
function removeFile(path) {
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`File on path "${path}" deleted successfully`);
    }
  });
}
module.exports = { removeFile };
