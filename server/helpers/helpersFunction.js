const path = require("path");
const fs = require("fs");
function removeFile(paths, fileName) {
  const cover = path.join(paths, fileName);
  fs.unlink(cover, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`File on path "${cover}" deleted successfully`);
    }
  });
}
module.exports = { removeFile };
