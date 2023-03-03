import { generateId } from "./helpersFunctions";
import { baseAPI } from "./apiEndpoints";
import $ from "jquery";
import axios from "axios";
// =======  CREAT  ========
async function createElement(event, formId, resource) {
    try {
        event.preventDefault();
        const data = new FormData(document.getElementById(formId))
        data.append("_id", generateId())
        const uri = `${baseAPI}/${resource}`;
        await axios.post(`${uri}`, data).then((res) => {
            const element = [...this.state[resource], data];
            this.setState({ [resource]: element });
            this.setTemporaryEmpty();
            // window.location.reload()
            console.log(`${resource} Created Successfully`)
        });
    } catch {
        console.error(`Error Creating ${resource}`);
    }
};
// =======  UPDATE  ========
async function updateElement(event, formId, resource) {
    try {
        event.preventDefault();
        const data = new FormData(document.getElementById(formId))
        const uri = `${baseAPI}/${resource}/${data._id}`
        await axios.put(`${uri}`, data).then(() => {
            const element = [...this.state[resource]]
            element.forEach((element) => { element._id === data._id ? Object.assign(element, data) : element })
            this.setState({ [resource]: element });
            this.setTemporaryEmpty()
            // window.location.reload()
            console.log(`${resource} Updated Successfully`)
        });
    } catch {
        console.error(`Error Updating ${resource}`);
    }
};
// =======  DELETE  ========
async function deleteElement(id, resource) {
    try {
        const uri = `${baseAPI}/${resource}`;
        await axios.delete(`${uri}/${id}`).then((res) => {
            const data = this.state[resource].filter((element) => element._id !== id);
            this.setState({ [resource]: data });
            console.log(`${resource} Deleted Successfully`)
        })
    }
    catch (err) {
        const errr = err
        console.error(`Error Deleting ${resource}`);
    }
};
// =======  CREAT  ========
async function multiPartCreateElement(e, formId, resource) {
    try {
        const uri = `${baseAPI}/${resource}`;
        const data = new FormData(document.getElementById(formId))
        data.append("_id", generateId())
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
};
// =======  UPDATE  ========
async function multiPartUpdateElement(e, formId, resource) {
    try {
        const data = new FormData(document.getElementById(formId))
        const uri = `${baseAPI}/${resource}/${data.get("_id")}`
        await axios.put(`${uri}`, data).then((res) => {
            const element = [...this.state[resource]]
            element.forEach((element) => { element._id === res.data._id ? Object.assign(element, res.data) : element })
            this.setState({ [resource]: element });
            // this.setTemporaryEmpty()
            // window.location.reload()
            console.log(`${resource} Updated Successfully !!!`)
            // console.log(res.data)
        });
    } catch (err) {
        console.error(err);
        console.error(`Error Updating ${resource}`);
    }
};
export { createElement, updateElement, deleteElement, multiPartCreateElement, multiPartUpdateElement }