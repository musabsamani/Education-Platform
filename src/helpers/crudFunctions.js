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
// =======  CREAT  ========
async function multiPartCreateElement(event, fileInputFieldName, formId, resource) {
    try {
        event.preventDefault()
        const uri = `${baseAPI}/${resource}`;
        const data = new FormData(document.getElementById(formId))
        const formFile = data.get(fileInputFieldName);
        const timeStampFileName = new Date().toISOString().replace(/[-:]/g, '') + "-" + fileInputFieldName + "-" + formFile.name
        const fileName = formFile.name ? timeStampFileName : ""
        data.append("_id", generateId())
        data.append("profileCoverName", fileName)
        const iterator = {}
        for (const [key, value] of data.entries()) {
            if (value instanceof File) {
                continue
            }
            iterator[key] = value
        }
        iterator[fileName] = fileName;
        axios.post(`${uri}`, data).then((res) => {
            const element = [...this.state[resource], iterator];
            this.setState({ [resource]: element });
            this.setTemporaryEmpty();
            // console.log(res)
            console.log(`${resource}  Created Successfully !!!`);
        });
    } catch (err) {
        console.error(err);
        console.error(`Error Creating ${resource}`);
    }
};
// =======  UPDATE  ========
async function multiPartUpdateElement(event, fileInputFieldName, formId, resource) {
    try {
        event.preventDefault()
        const data = new FormData(document.getElementById(formId))
        const formFile = data.get(fileInputFieldName);
        const uri = `${baseAPI}/${resource}/${data.get("_id")}`
        const timeStampFileName = new Date().toISOString().replace(/[-:]/g, '') + "-" + fileInputFieldName + "-" + formFile.name
        const fileName = formFile.name ? timeStampFileName : ""
        data.append("profileCoverName", fileName)
        const iterator = {}
        for (const [key, value] of data.entries()) {
            if (value instanceof File || key === "oldprofileCoverName") {
                continue
            }
            iterator[key] = value
        }
        iterator[fileName] = fileName;
        await axios.put(`${uri}`, data).then((res) => {
            const element = [...this.state[resource]]
            element.forEach((element) => { element._id === iterator._id ? Object.assign(element, iterator) : element })
            this.setState({ [resource]: element });
            this.setTemporaryEmpty()
            console.log(`${resource} Updated Successfully !!!`)
            // console.log(res)
        });
    } catch (err) {
        console.error(err);
        console.error(`Error Updating ${resource}`);
    }
};
export { createElement, updateElement, deleteElement, multiPartCreateElement, multiPartUpdateElement }