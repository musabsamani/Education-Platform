import { generateId } from "./helpersFunctions";
import { baseAPI } from "./apiEndpoints";
import $ from "jquery";
import axios from "axios";
// import comments from './helpers/comments';
// =============== this is for axios for POST and PUT methods
// ?? its so important
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";

// =======  CREAT  ========
async function createElement(event, formId, resource) {
    try {
        event.preventDefault();
        var unindexed_array = $(`#${formId}`).serializeArray();
        var data = {};
        unindexed_array.forEach((n, i) => {
            data[n["name"]] = n["value"];
        });
        data._id = generateId();
        const uri = `${baseAPI}/${resource}`;
        await axios.post(`${uri}`, data).then((res) => {
            const element = [...this.state[resource], data];
            this.setState({ [resource]: element });
            this.setTemporaryEmpty();
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
        var unindexed_array = $(`#${formId}`).serializeArray();
        var data = {};
        unindexed_array.forEach((n, i) => {
            data[n["name"]] = n["value"];
        });
        const uri = `${baseAPI}/${resource}/${data._id}`
        await axios.put(`${uri}`, data).then(() => {
            const element = [...this.state[resource]]
            element.forEach((element) => { element._id === data._id ? Object.assign(element, data) : element })
            this.setState({ [resource]: element });
            this.setTemporaryEmpty()
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
        });
    } catch {
        console.error(`Error Deleting ${resource}`);
    }
};

export { createElement, updateElement, deleteElement }