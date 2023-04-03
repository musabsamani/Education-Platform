function messageShow(type, content, data = "") {
  let message;
  message = {
    type,
    content,
    details: data,
  };
  this.setState({ message });
  return message;
}
export { messageShow };
