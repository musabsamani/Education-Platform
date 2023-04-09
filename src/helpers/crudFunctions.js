import { generateId } from "./helpersFunctions";
import { baseAPI } from "./apiEndpoints";
import axios from "axios";

// =======  CREAT  ========
async function createElement(event, resource) {
  try {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("_id", generateId());
    let element = {};
    for (const [key, value] of data) {
      element[key] = value;
    }
    // const uri = `http://httpbin.org/anything`;
    const uri = `${baseAPI}/${resource}`;
    const res = await axios.post(`${uri}`, element);
    if (res.statusText === "OK") {
      const state = [...this.state[resource], res.data.data];
      this.setState({ [resource]: state });
      this.setState({ message: res.data.message });
      console.log(res.data.message.content);
    }
  } catch (err) {
    const { content, details } = err.response.data.message;
    console.error(content);
    console.error(details);
    this.setState({ message: err.response.data.message });
  }
}
// =======  UPDATE  ========
async function updateElement(event, resource) {
  try {
    event.preventDefault();
    const data = new FormData(event.target);
    let element = {};
    for (const [key, value] of data) {
      element[key] = value;
    }
    const uri = `${baseAPI}/${resource}/${element._id}`;
    const res = await axios.put(`${uri}`, element);
    if (res.statusText === "OK") {
      const state = [...this.state[resource]];
      state.forEach((round) => {
        round._id === res.data.data._id ? Object.assign(round, res.data.data) : round;
      });
      this.setState({ [resource]: state });
      this.setState({ message: res.data.message });
      console.log(res.data.message.content);
    }
  } catch (err) {
    const { content, details } = err.response.data.message;
    console.error(content);
    console.error(details);
    this.setState({ message: err.response.data.message });
  }
}
// =======  DELETE  ========
async function deleteElement(id, resource) {
  try {
    const uri = `${baseAPI}/${resource}`;
    const res = await axios.delete(`${uri}/${id}`);
    if (res.statusText === "OK") {
      const data = this.state[resource].filter((element) => element._id !== id);
      this.setState({ [resource]: data });
      this.setState({ message: res.data.message });
      console.log(res.data.message.content);
    }
  } catch (err) {
    const { content, details } = err.response.data.message;
    console.error(content);
    console.error(details);
    this.setState({ message: err.response.data.message });
  }
}
// =======  CREAT  ========
async function multiPartCreateElement(event, resource) {
  try {
    const uri = `${baseAPI}/${resource}`;
    const data = new FormData(event.target);
    data.append("_id", generateId());
    const res = await axios.post(`${uri}`, data);
    if (res.statusText === "OK") {
      const element = [...this.state[resource], res.data.data];
      this.setState({ [resource]: element });
      this.setState({ message: res.data.message });
      console.log(res.data.message.content);
    }
  } catch (err) {
    const { content, details } = err.response.data.message;
    console.error(content);
    console.error(details);
    this.setState({ message: err.response.data.message });
  }
}
// =======  UPDATE  ========
async function multiPartUpdateElement(event, resource) {
  try {
    const data = new FormData(event.target);
    const uri = `${baseAPI}/${resource}/${data.get("_id")}`;
    const res = await axios.put(`${uri}`, data);
    if (res.statusText === "OK") {
      const element = [...this.state[resource]];
      element.forEach((round) => {
        round._id === res.data.data._id ? Object.assign(round, res.data.data) : round;
      });
      this.setState({ [resource]: element });
      this.setState({ message: res.data.message });
      console.log(res.data.message.content);
    }
  } catch (err) {
    const { content, details } = err.response.data.message;
    console.error(content);
    console.error(details);
    this.setState({ message: err.response.data.message });
  }
}
// =======  UPDATE  ========
async function updateState(resource, resourceApi) {
  try {
    const { data: data } = await axios.get(resourceApi);
    console.log(data);
    console.log(this.state[resource] == data);
    this.setState({ [resource]: data });
    console.log(this.state[resource]);
    console.log(this.state[resource] == data);
    this.setState({ message: res.data.message });
    console.log(res.data.message.content);
  } catch (err) {
    const { content, details } = err.response.data.message;
    console.error(content);
    console.error(details);
    this.setState({ message: err.response.data.message });
  }
}
// =======  Send Mail  ========
async function sendMail(e) {
  try {
    const uri = `${baseAPI}/email`;
    const data = {};
    const formData = new FormData(e.target);
    for (let [key, value] of formData) {
      data[key] = value;
    }
    const res = await axios.post(uri, data);
    console.log(res.data);
    this.setState({ message: res.data.message });
    console.log(res.data.message.content);
  } catch (err) {
    const { content, details } = err.response.data.message;
    console.error(content);
    console.error(details);
    this.setState({ message: err.response.data.message });
  }
}
export { createElement, updateElement, deleteElement, multiPartCreateElement, multiPartUpdateElement, updateState, sendMail };
