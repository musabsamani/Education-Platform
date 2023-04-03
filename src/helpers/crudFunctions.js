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
    await axios.post(`${uri}`, element).then((res) => {
      const state = [...this.state[resource], res.data.data];
      this.setState({ [resource]: state });
      this.setState({ message: res.data.message });
      // this.setTemporaryEmpty();
      // window.location.reload()
      console.log(res.data.message.content);
      // console.log(res.data.data);
      // console.log(res.data);
    });
  } catch {
    console.error(`Error Creating ${resource}`);
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
    await axios.put(`${uri}`, element).then((res) => {
      const state = [...this.state[resource]];
      state.forEach((round) => {
        round._id === res.data.data._id ? Object.assign(round, res.data.data) : round;
      });
      this.setState({ [resource]: state });
      this.setState({ message: res.data.message });
      // this.setTemporaryEmpty();
      // window.location.reload()
      console.log(res.data.message.content);
      // console.log(res.data.data);
      // console.log(res.data);
    });
  } catch {
    console.error(`Error Updating ${resource}`);
  }
}
// =======  DELETE  ========
async function deleteElement(id, resource) {
  try {
    const uri = `${baseAPI}/${resource}`;
    await axios.delete(`${uri}/${id}`).then((res) => {
      const data = this.state[resource].filter((element) => element._id !== id);
      this.setState({ [resource]: data });
      this.setState({ message: res.data.message });
      // this.setTemporaryEmpty();
      // window.location.reload()
      console.log(res.data.message.content);
      // console.log(res.data.data);
      // console.log(res.data);
    });
  } catch (err) {
    console.error(`Error Deleting ${resource}`);
    console.error(err.message);
  }
}
// =======  CREAT  ========
async function multiPartCreateElement(event, resource) {
  try {
    const uri = `${baseAPI}/${resource}`;
    const data = new FormData(event.target);
    data.append("_id", generateId());
    axios.post(`${uri}`, data).then((res) => {
      const element = [...this.state[resource], res.data.data];
      this.setState({ [resource]: element });
      this.setState({ message: res.data.message });
      // this.setTemporaryEmpty();
      // window.location.reload()
      console.log(res.data.message.content);
      // console.log(res.data.data);
      // console.log(res.data);
    });
  } catch (err) {
    console.error(`Error Creating ${resource}`);
    console.error(err.message.message);
  }
}
// =======  UPDATE  ========
async function multiPartUpdateElement(event, resource) {
  try {
    // event.preventDefault();
    const data = new FormData(event.target);
    const uri = `${baseAPI}/${resource}/${data.get("_id")}`;
    await axios.put(`${uri}`, data).then((res) => {
      const element = [...this.state[resource]];
      element.forEach((round) => {
        round._id === res.data.data._id ? Object.assign(round, res.data.data) : round;
      });
      this.setState({ [resource]: element });
      this.setState({ message: res.data.message });
      // this.setTemporaryEmpty();
      // window.location.reload()
      console.log(res.data.message.content);
      // console.log(res.data.data);
      // console.log(res.data);
    });
  } catch (err) {
    console.error(`Error Updating ${resource}`);
    console.error(err.message);
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
    // this.setState({ message: res.data.message });
    // // this.setTemporaryEmpty();
    // // window.location.reload()
    // console.log(res.data.message.content);
    // console.log(res.data.data);
    // console.log(res.data);
  } catch (err) {
    console.error(err.message);
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
    await axios.post(uri, data).then((res) => {
      console.log(res.data);
      this.setState({ message: res.data });
      // this.setTemporaryEmpty();
      // window.location.reload()\
    });
  } catch (err) {
    console.error(`Error Sending Email`);
    console.error(err.message);
  }
}
async function sendWhatsapp(e) {
  try {
    // this.setState({ message: res.data });
  } catch (err) {
    console.error(`Error Sending Whatsapp Message`);
    console.error(err.message);
  }
}
export { createElement, updateElement, deleteElement, multiPartCreateElement, multiPartUpdateElement, updateState, sendMail, sendWhatsapp };
