// ? =============================
// ? =====  FRON-END COMMENTS HERE
// ? =============================





// ? =============================
// ? =====  BACK-END COMMENTS HERE
// ? =============================
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Developer"
};

for (const prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}
