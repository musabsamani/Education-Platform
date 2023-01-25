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
  console.log(data)
  var request = {
    "url": `http://localhost:3000/api/users/${data.id}`,
    "method": "PUT",
    "data": data,
  };
  $.ajax(request).done(function (response) {
    alert("User Updated Successfully");
  });
});
$(".remove").on("click", function () {
  var id = $(this).attr("data-id");
  var request = {
    url: `http://localhost:3000/api/users/${id}`,
    method: "DELETE",
  };
  if (confirm("DO you really want to delete user?")) {
    $.ajax(request).done(function (response) {
      alert("User Deleted Successfully");
      location.reload();
    });
  }
});
