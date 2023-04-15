import axios from "axios";
import { toast } from "react-toastify";
// ====== helpers files/
import { studentAPI, volunteerAPI, lessonAPI, subjectAPI, roomAPI, sessionAPI } from "./apiEndpoints";
import { handleChange, setTemporary, setTemporaryEmpty } from "./helpersFunctions";
import { messageShow } from "./messages";
import { createElement, updateElement, deleteElement, multiPartCreateElement, multiPartUpdateElement, updateState, sessionNotify } from "./crudFunctions";

function bindMethods(thisKeyword) {
  thisKeyword.handleChange = handleChange.bind(thisKeyword);
  thisKeyword.setTemporary = setTemporary.bind(thisKeyword);
  thisKeyword.setTemporaryEmpty = setTemporaryEmpty.bind(thisKeyword);
  thisKeyword.createElement = createElement.bind(thisKeyword);
  thisKeyword.updateElement = updateElement.bind(thisKeyword);
  thisKeyword.deleteElement = deleteElement.bind(thisKeyword);
  thisKeyword.multiPartCreateElement = multiPartCreateElement.bind(thisKeyword);
  thisKeyword.multiPartUpdateElement = multiPartUpdateElement.bind(thisKeyword);
  thisKeyword.updateState = updateState.bind(thisKeyword);
  thisKeyword.messageShow = messageShow.bind(thisKeyword);
  thisKeyword.catchErr = catchErr.bind(thisKeyword);
  thisKeyword.sessionNotify = sessionNotify.bind(thisKeyword);
  thisKeyword.componentDidMount = componentDidMount.bind(thisKeyword);
  thisKeyword.componentDidUpdate = componentDidUpdate.bind(thisKeyword);
}
function catchErr(err, message) {
  if (err.response && err.response.data.message) {
    this.setState({ message: err.response.data.message });
  } else {
    let status = "error";
    let resource = "catchError";
    let content = err.message;
    let operation = message ? "on ComponentDidMount" : "";
    this.setState({ message: { operation, content, status, resource } });
  }
}
async function componentDidMount() {
  try {
    const { data: students } = await axios.get(studentAPI);
    this.setState({ students });
    const { data: volunteers } = await axios.get(volunteerAPI);
    this.setState({ volunteers });
    const { data: lessons } = await axios.get(lessonAPI);
    this.setState({ lessons });
    const { data: subjects } = await axios.get(subjectAPI);
    this.setState({ subjects });
    const { data: rooms } = await axios.get(roomAPI);
    this.setState({ rooms });
    const { data: sessions } = await axios.get(sessionAPI);
    this.setState({ sessions });
  } catch (err) {
    this.catchErr(err, "Error fetching data from the server on componentDidMount");
  }
}
function componentDidUpdate(prevProps, prevState) {
  let message = { ...this.state.message };
  if (Object.keys(message).length > 0) {
    if (message.content) {
      let operation = message.operation;
      let resource = message.resource;
      let status = message.status;
      let content = message.content;
      if (status === "success") {
        if (operation === "update" || operation === "delete") {
          if (resource === "subject") {
            this.updateState(["lessons", "sessions", "volunteers"]);
          } else if (resource === "room" || resource === "volunteer" || resource === "lessons") {
            this.updateState(["sessions"]);
          }
        }
        toast.success(content);
        this.setState({ message: {} });
      } else if (status === "error") {
        toast.error(content);
        this.setState({ message: {} });
      } else if (status === "warning") {
        toast.warn(content);
        this.setState({ message: {} });
      } else {
        toast(content);
        console.log(message);
        this.setState({ message: {} });
      }
    } else {
      alert(message);
      toast(message);
      console.log(message);
      this.setState({ message: {} });
    }
  }
}

export { bindMethods, catchErr, componentDidMount, componentDidUpdate };
