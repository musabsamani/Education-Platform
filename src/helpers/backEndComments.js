// ? =====  Not Emergent
// 01 - for more Organizing component and consistent file structure
/*
    I - i moved imgage on "/src/component/show/download.png" to the path
    "/src/assets/img"

    II - Also all css files should be in the path "/src/assets/css"

    II - Also i moved all the CRUD functions on App.jsx "createElement, delete, update"
    to another file named crudfunctions in "src/helpers/crudfunctions.js"
    and functions of "handleChange, seTemporary, ..." to the file helpersFunctions "src/helpers/helpersFunctions.js"
    Also to work properly i added constructor function to the App.jsx and bind `this` keyword to work correctly
    ? see App.jsx line 44

    III - Also install nice vscode extension named "Material Icon Theme" by Philipp and has 16,389,162 download
    its support various type of icon to display on the Explorer window in vscode

    IV -
*/
// ! =====  Emergent !!!!

//  ##### calender component works fine and all events are displayed in in the calendar
//  ##### just open calender component and see line 24
//  ##### we should use useState hooks instead on array.push() method see lines 32, 34-40
// ? i merged add and update component in on component inside folder named form
// ? and i used property i call "name" inside each element in App.jsx to denote whether it is add or update
// ? EXAMPLE : element={<StudentForm name="update" setTemporary=this.setTemporary ......}
// ? in each component i used condetional rendering using ternary operator (condition?if_true:if_false)
// ? condition is (this.props.name==="add")
// ! DELETE ALL COMMENTS YOU HAVE READ