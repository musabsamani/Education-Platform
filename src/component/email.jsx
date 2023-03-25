import React, { Component } from 'react';
class Email extends Component {
    submit = (e) => {
        e.preventDefault()
        this.props.SendMail(e, "email")
    }
    render() {
        return (
            <>
                <form onSubmit={e => this.submit(e)} action="" id="email" style={{ margin: "10px" }}>
                    <div><input type="text" name="name" placeholder='your name' /></div>
                    <div><input type="email" name="email" placeholder='To email' /></div>
                    <div><input type="text" name="subject" placeholder='subject' /></div>
                    <div><textarea cols="30" name="message" rows="10" placeholder='message'></textarea></div>
                    <div> <button type='submit'>send</button></div>
                </form>
            </>
        )
    }
}
export default Email