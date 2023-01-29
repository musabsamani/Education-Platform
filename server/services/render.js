const axios = require("axios");
exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:5000/api/users")
    .then((respond) => {
      res.render("index", { users: respond.data });
    })
    .catch((err) => res.send(err.message));
};
exports.updateUser = (req, res) => {
  axios
    .get("http://localhost:5000/api/users", { params: { id: req.query.id } })
    .then(function (userData) {
      res.render("update_user", { user: userData.data });
    })
    .catch((err) => {
      res.send(err.message);
    });
};
exports.addUser = (req, res) => {
  res.render("add_user");
};
