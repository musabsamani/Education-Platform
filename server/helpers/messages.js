function messageCRUD(type, operation, resource, data = "") {
  let content;
  if (type == "success") {
    let details = "";
    content = `${resource} ${operation}d successfully`;
    if (operation === "read") {
      return data;
    }
    return {
      message: {
        type: type,
        content: content,
        operation,
        details,
      },
      data,
    };
  }
  if (type == "error") {
    content = `error ${operation.slice(0, -1)}ing ${resource}`;
    if (operation === "read") {
      content = `error ${operation}ing ${resource}`;
    }
    if (data == "empty-body") {
      data = "request body can't be empty";
    } else if (data.split(" ")[0].length == 24) {
      content = `${resource} with id ${data} not found`;
      data = "404 error";
    } else {
      content = `error occured while performing ${operation} operation`;
    }
    return {
      message: {
        type: type,
        content: content,
        details: data,
        operation,
      },
    };
  }
}
module.exports = { messageCRUD };
