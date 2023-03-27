import React, { Component } from "react"
import { sendWhatsapp } from "../helpers/crudFunctions"
class Whatsapp extends Component {
    constructor(props) {
        super(props)
        this.sendWhatsapp = sendWhatsapp.bind(this)
    }
    submit = e => {
        e.preventDefault()
        alert("Ddd")
        this.sendWhatsapp(e)
    }
    render() {
        return (
            <form onSubmit={e => this.submit(e)}>
                <div><input type="text" name="number" placeholder="number" /></div>
                <div><textarea name="message" cols="30" rows="10" placeholder="message"></textarea></div>
                <div><button type="submit">send</button></div>
            </form>
        )
    }
}
export default Whatsapp