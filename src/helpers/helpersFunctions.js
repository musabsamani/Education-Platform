// =======  setting this.state.temporary while typing in the input fields  ========
function handleChange(e) {
    const temporary = { ...this.state.temporary };
    temporary[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ temporary });
};
// =======  store value in this.state.temporary  ========
function setTemporary(element) {
    this.setState({ temporary: element });
};
// =======  setting this.state.temporary to empty value  ========
function setTemporaryEmpty() {
    this.setState({ temporary: {} });
};
function generateId() {
    const chars = '0123456789abcdef';
    let hex = '';
    for (let i = 0; i < 24; i++) {
        const idx = Math.floor(Math.random() * chars.length);
        hex += chars[idx];
    }
    return hex;
}
function dateFormaterForInput(date) {
    if (!date) {
        return '';
    }
    if (typeof date === 'object') {

        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    }
    else return date
}
const ali = "dmkrfkn"
function hh() {
    console.log(ali)
}
// console.log(new Date("2023-02-01"))
export { handleChange, setTemporary, setTemporaryEmpty, generateId, dateFormaterForInput, hh }