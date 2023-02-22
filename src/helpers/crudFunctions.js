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
        });
    } catch {
        console.error(`Error Updating ${resource}`);
    }
};
// =======  DELETE  ========
async function deleteElement(id, resource) {
    try {
        const uri = `${baseAPI}/${resource}`;
        await axios.delete(`${uri}/${id}`).then(() => {
            const data = this.state[resource].filter((element) => element._id !== id);
            this.setState({ [resource]: data });
        });
    } catch {
        console.error(`Error Deleting ${resource}`);
    }
};

// =======  setting this.state.temporary while typing in the input fields  ========
function handleChange(e) {
    const temporary = { ...this.state.temporary };
    temporary[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ temporary });
};
// =======  store value in this.state.temporary  ========
function setTemporary(element) {
    this.setState({ temporary: element });
};
// =======  setting this.state.temporary to empty value  ========
function setTemporaryEmpty() {
    this.setState({ temporary: {} });
};

export { createElement, updateElement, deleteElement, handleChange, setTemporary, setTemporaryEmpty }