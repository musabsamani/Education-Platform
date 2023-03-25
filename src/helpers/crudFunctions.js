import { generateId } from "./helpersFunctions";
import { baseAPI } from "./apiEndpoints";
import axios from "axios";

// =======  CREAT  ========
async function createElement(event, formId, resource) {
  try {
    event.preventDefault();
    const data = new FormData(document.getElementById(formId));
    data.append("_id", generateId());
    let element = {};
    for (const [key, value] of data) {
      element[key] = value;
    }
    const uri = `${baseAPI}/${resource}`;
    await axios.post(`${uri}`, element).then((res) => {
      const state = [...this.state[resource], data];
      this.setState({ [resource]: state });
      // this.setTemporaryEmpty();
      // window.location.reload()
      console.log(`${resource} Created Successfully`);
      //   console.log(res);
    });
  } catch {
    console.error(`Error Creating ${resource}`);
  }
}
// =======  UPDATE  ========
async function updateElement(event, formId, resource) {
  try {
    event.preventDefault();
    const data = new FormData(document.getElementById(formId));
    // const uri = `http://httpbin.org/anything`;
    let element = {};
    for (const [key, value] of data) {
      element[key] = value;
    }
    const uri = `${baseAPI}/${resource}/${element._id}`;
    console.log(element);
    await axios.put(`${uri}`, element).then((res) => {
      const state = [...this.state[resource]];
      state.forEach((round) => {
        round._id === element._id ? Object.assign(round, element) : round;
      });
      this.setState({ [resource]: state });
      //   this.setTemporaryEmpty();
      // window.location.reload()
      console.log(`${resource} Updated Successfully`);
      //   console.log(res);
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
      console.log(`${resource} Deleted Successfully`);
    });
  } catch (err) {
    const errr = err;
    console.error(`Error Deleting ${resource}`);
  }
}
// =======  CREAT  ========
async function multiPartCreateElement(e, formId, resource) {
  try {
    const uri = `${baseAPI}/${resource}`;
    const data = new FormData(document.getElementById(formId));
    data.append("_id", generateId());
    axios.post(`${uri}`, data).then((res) => {
      const element = [...this.state[resource], res.data];
      this.setState({ [resource]: element });
      // this.setTemporaryEmpty();
      // window.location.reload()
      console.log(`${resource}  Created Successfully !!!`);
      // console.log(res.data)
    });
  } catch (err) {
    console.error(err);
    console.error(`Error Creating ${resource}`);
  }
}
// =======  UPDATE  ========
async function multiPartUpdateElement(e, formId, resource) {
  try {
    const data = new FormData(document.getElementById(formId));
    const uri = `${baseAPI}/${resource}/${data.get("_id")}`;
    await axios.put(`${uri}`, data).then((res) => {
      const element = [...this.state[resource]];
      element.forEach((element) => {
        element._id === res.data._id ? Object.assign(element, res.data) : element;
      });
      this.setState({ [resource]: element });
      // this.setTemporaryEmpty()
      // window.location.reload()
      console.log(`${resource} Updated Successfully !!!`);
      // console.log(res.data)
    });
  } catch (err) {
    console.error(err);
    console.error(`Error Updating ${resource}`);
  }
}
// =======  Send Mail  ========
async function SendMail(e, formId) {
  try {
    const uri = `${baseAPI}/email`;
    const data = {};
    const formData = new FormData(document.getElementById(formId));
    for (let [key, value] of formData) {
      data[key] = value;
    }
    await axios.post(uri, data).then((res) => {
      console.log(res.data);
    });
  } catch (err) {
    console.error(err);
    console.error(`Error sending Email`);
  }
}
export { createElement, updateElement, deleteElement, multiPartCreateElement, multiPartUpdateElement, SendMail };
