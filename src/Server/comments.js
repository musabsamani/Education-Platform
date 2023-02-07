// ? =============================
// ? =====  FRON-END COMMENTS HERE
// ? =============================





// ? =============================
// ? =====  BACK-END COMMENTS HERE
// ? =============================
// createElement = function (event, element) {
//     event.preventDefault();
//     var unindexd_array = $(this).serializeArray();
//     var data = {};
//     var elementName = {}
//     elementName["name"] = element
//     $.map(unindexd_array, function (n, i) {
//         data[n["name"]] = n["value"];
//     });
//     var request = {
//         "url": `http://localhost:5000/api/${element}`,
//         "method": `POST`,
//         "data": data,
//     };
//     $.ajax(request).done((response) => {
//         const [element] = [...this.state[element], [element]]
//         this.setState({ element });
//         this.setEmptyPerson()
//         alert(`${element} Added Successfully !!!`);
//     })
// }