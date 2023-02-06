function addUser() {
  alert("User Added Successfully !!!");
}
$("#updateUser").on("submit", function (e) {
  e.preventDefault();
  var unindexd_array = $(this).serializeArray();
  var data = {};
  $.map(unindexd_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  var request = {
    "url": `http://localhost:5000/api/students/${data.id}`,
    "method": "PUT",
    "data": data,
  };
  $.ajax(request).done(function (response) {
    alert("User Updated Successfully");
  });
});
$("#remove").on("click", function () {
  var id = $(this).attr("data-id");
  var request = {
    url: `http://localhost:5000/api/students/${id}`,
    method: "DELETE",
  };
  if (confirm("DO you really want to delete student?")) {
    $.ajax(request).done(function (response) {
      alert("User Deleted Successfully");
      location.reload();
    });
  }
});
