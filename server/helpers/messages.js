function messageCRUD(status, operation, resource, data = "") {
  let content;
  if (status === "success") {
    content = `${resource} ${operation}d successfully`;
    if (operation === "read") {
      return data;
    }
    return {
      message: {
        status,
        content,
        operation,
        resource,
      },
      data,
    };
  }
  if (status === "error" || status === "warning") {
    content = `error ${operation.slice(0, -1)}ing ${resource}`;
    if (operation === "read") {
      content = `error ${operation}ing ${resource}`;
    }
    if (data === "empty-body") {
      data = "request body can't be empty";
    } else if (data.split(" ")[0].length == 24) {
      content = `${resource} with id ${data} not found`;
      data = "404 error";
    } else if (data === "cannot delete this document it has refrencing") {
      content = data;
    } else {
      content = `error occured while performing ${operation} operation`;
    }
    return {
      message: {
        status,
        data,
        content,
        operation,
        resource,
      },
    };
  }
}
function message(status, operation, data = "") {
  let content;
  if (status == "success") {
    if (operation == "email") {
      content = "email sent successfully";
    }
    return {
      message: {
        status,
        content,
        operation,
        data,
      },
    };
  }
  if (status == "error") {
    if (operation == "email") {
      content = "error sending email";
    }
    return {
      message: {
        status,
        content,
        operation,
        data,
      },
    };
  }
}

module.exports = { messageCRUD, message };
