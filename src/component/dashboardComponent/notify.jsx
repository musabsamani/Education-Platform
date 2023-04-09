import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Notify() {
    const notify = () => toast("Added successfuly !");

    return (
        <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer />
        </div>
    );
}

export default Notify;