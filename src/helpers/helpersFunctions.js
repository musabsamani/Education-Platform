// ===============  setting this.state.temporary while typing in the input fields
function handleChange(e) {
  const temporary = { ...this.state.temporary };
  temporary[e.currentTarget.name] = e.currentTarget.value;
  this.setState({ temporary });
}
// ===============  store value in this.state.temporary
function setTemporary(element) {
  this.setState({ temporary: element });
}
// ===============  setting this.state.temporary to empty value
function setTemporaryEmpty() {
  this.setState({ temporary: {} });
}
// ===============  genarate random 24 hexadecimal digit ID
function generateId() {
  const chars = "0123456789abcdef";
  let hex = "";
  for (let i = 0; i < 24; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    hex += chars[idx];
  }
  return hex;
}
// ===============  genarate random number with seed property

function randomSeed(seed) {
  let x = Math.sin(seed);
  return x - Math.floor(x);
}
// convert 12445.5338383 to 124455338383
function toIntegerRemoveFloatPoint(n) {
  return parseInt(String(n).split(".").join(""));
}
// ===============  convert date object to string to use it to fill the input Date when using onChange
function dateFormaterForInput(date) {
  if (!date) {
    return "";
  }
  if (typeof date === "object") {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  } else return date;
}
// ===============  check if the date is valid
// 1 start date is before end
// 2 not overlaping with any other dates
function isValidDate(newObject, oldObject) {
  const newObjectStart = new Date(newObject.start).getTime();
  const newObjectEnd = new Date(newObject.end).getTime();
  const oldObjectStart = new Date(oldObject.start).getTime();
  const oldObjectEnd = new Date(oldObject.end).getTime();
  const newObjectOccurFirst = newObjectEnd <= oldObjectStart;
  const newObjectOccurAfter = newObjectStart >= oldObjectEnd;
  const noOvelap = newObjectOccurFirst || newObjectOccurAfter;
  if (!noOvelap) {
    return false;
  }
  return noOvelap;
}

export { handleChange, setTemporary, setTemporaryEmpty, generateId, randomSeed, dateFormaterForInput, isValidDate };
