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
// console.log(new Date("2023-02-01"))
export { generateId, dateFormaterForInput }