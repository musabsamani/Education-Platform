
import React, { useState } from 'react';
import axios from 'axios';
export default function upload() {
    const [file, setFile] = useState()
    const send = event => {
        event.preventDefault()
        const data = new FormData()
        data.append("profileCover", file)
        const uri = "http://localhost:5000/api/upload"
        axios.post(uri, data).then(res => console.log(res)).catch(err => console.log(err))
    }
    const handleChange=e=>{const file = e.target.files[0];
                        setFile(file)}

    return (
        <form onSubmit={e => send(e)}>
            <input type="file" name="profileCover"
                onChange={
                    e => handleChange(e)
                }
            />
            <button className="btn btn-primary" type="submit">Upload</button>
            <img src=""/>
        </form>
    )
}