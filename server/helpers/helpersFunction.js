const path = require("path");
const fs = require("fs");
function removeFile(array) {
  array.forEach((element) => {
    let path = element.filePath;
    fs.unlink(path, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`File on path "${path}" deleted successfully`);
      }
    });
  });
}
function getDayOfWeek(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay(); // Get the day index (0-6)
  const dayOfWeek = daysOfWeek[dayIndex]; // Get the day of the week using the day index
  return dayOfWeek;
}
function getMonths(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthIndex = date.getMonth(); // Get the day index (0-6)
  const month = months[monthIndex]; // Get the day of the week using the day index
  return month;
}
function getTimeWithAMPM(date) {
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const timeWithAMPM = date.toLocaleString("en-US", options);
  return timeWithAMPM;
}
module.exports = { removeFile, getDayOfWeek, getMonths, getTimeWithAMPM };
