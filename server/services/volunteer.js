const axios = require("axios");
// ========================
// ========================
// ===== Student Services
exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:5000/api/students")
    .then((respond) => {
      res.render("student/index", { students: respond.data });
    })
    .catch((err) => res.send(err.message));
}
exports.updateStudent = (req, res) => {
  axios
    .get("http://localhost:5000/api/students", { params: { id: req.query.id } })
    .then(function (studentData) {
      res.render("student/update_student", { student: studentData.data });
    })
    .catch((err) => {
      res.send(err.message);
    });
};
exports.addStudent = (req, res) => {
  res.render("student/add_student");
};
