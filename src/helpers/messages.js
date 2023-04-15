function messageShow(status, content, data = "") {
  let message;
  message = {
    status,
    content,
    data,
  };
  this.setState({ message });
  return message;
}
export { messageShow };
