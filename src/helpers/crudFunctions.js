import axios from "axios";
import { baseAPI } from "./apiEndpoints";

// =======  CREAT  ========
async function createElement(event, resource) {
  try {
    event.preventDefault();
    const data = new FormData(event.target);
    let element = {};
    for (const [key, value] of data) {
      element[key] = value;
    }
    // const uri = `http://httpbin.org/anything`;
    const uri = `${baseAPI}/${resource}`;
    const res = await axios.post(`${uri}`, element);
    if (res.statusText === "OK") {
      const state = [...this.state[resource], res.data.data];
      this.setTemporaryEmpty();
      this.setState({ [resource]: state });
      this.setState({ message: res.data.message });
    }
  } catch (err) {
    this.catchErr(err);
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
      this.setTemporaryEmpty();
      this.setState({ [resource]: state });
      this.setState({ message: res.data.message });
    }
  } catch (err) {
    this.catchErr(err);
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
    }
  } catch (err) {
    this.catchErr(err);
  }
}
// =======  CREAT  ========
async function multiPartCreateElement(event, resource) {
  try {
    const uri = `${baseAPI}/${resource}`;
    const data = new FormData(event.target);
    const res = await axios.post(`${uri}`, data);
    if (res.statusText === "OK") {
      const element = [...this.state[resource], res.data.data];
      this.setTemporaryEmpty();
      this.setState({ [resource]: element });
      this.setState({ message: res.data.message });
    }
  } catch (err) {
    this.catchErr(err);
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
      this.setTemporaryEmpty();
      this.setState({ [resource]: element });
      this.setState({ message: res.data.message });
    }
  } catch (err) {
    this.catchErr(err);
  }
}
// =======  UPDATE  ========
async function updateState(resourceArray) {
  try {
    let api;
    resourceArray.forEach(async (resource) => {
      api = `${baseAPI}/${resource}`;
      const { data: data } = await axios.get(api);
      this.setState({ [resource]: data });
    });
  } catch (err) {
    this.catchErr(err);
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
    this.setState({ message: res.data.message });
  } catch (err) {
    this.catchErr(err);
  }
}
// =======  sessionNotify  ========
async function sessionNotify(session) {
  try {
    const uri = `${baseAPI}/sessionNotify`;
    const res = await axios.post(uri, session);
    this.setState({ message: res.data.message });
  } catch (err) {
    this.catchErr(err);
  }
}
export { createElement, updateElement, deleteElement, multiPartCreateElement, multiPartUpdateElement, updateState, sendMail, sessionNotify };
