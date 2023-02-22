function generateId() {
    const chars = '0123456789abcdef';
    let hex = '';
    for (let i = 0; i < 24; i++) {
        const idx = Math.floor(Math.random() * chars.length);
        hex += chars[idx];
    }
    return hex;
}
export { generateId }