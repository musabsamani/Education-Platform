import axios from "axios";
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
function catchErr(err) {
  if (err.response.data.message) {
    const { content, details } = err.response.data.message;
    console.error(content);
    console.error(details);
    this.setState({ message: err.response.data.message });
  } else {
    this.setState({ message: err.message });
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
    console.log(err.message);
    console.log("Error fetching data from the server on componentDidMount");
    this.setState({ message: err.message });
  }
}
function componentDidUpdate(prevProps, prevState) {
  let message = { ...this.state.message };
  if (Object.keys(message).length > 0) {
    if (message.content) {
      toast(message.content);
      let operation = message.operation;
      let resource = message.resource;
      console.log(message.content);
      if (operation === "update" || operation === "delete") {
        if (resource === "subject") {
          this.updateState(["lessons", "sessions", "volunteers"]);
        } else if (resource === "room" || resource === "volunteer" || resource === "lessons") {
          this.updateState(["sessions"]);
        }
      }
      let condition = operation === "delete" || operation === "create" || operation === "update";
      if (condition) {
        this.setState({ message: {} });
      } else {
        alert(`${message.type}\n${message.content}`);
        this.setState({ message: {} });
      }
    } else {
      console.log(message);
      this.setState({ message: {} });
    }
  }
}

export { bindMethods, catchErr, componentDidMount, componentDidUpdate };
