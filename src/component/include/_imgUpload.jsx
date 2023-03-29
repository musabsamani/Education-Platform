import React, { Component } from "react"
import Input from "./_input";
class ImgUpload extends Component {
    src = this.props.temporary[this.props.name] ? this.props.temporary[this.props.name] : "src/assets/img/uploadCover.webp"
    state = {
        file: "",
        src: this.src
    };
    photoUpload = (e) => {
        // e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = (e) => {
                this.setState({
                    file: file,
                    src: reader.result,
                })
            }
        }
        else {
            this.setState({
                file: "",
                src: "src/assets/img/uploadCover.webp"
            })
        }
    }
    render() {
        const { name, temporary } = this.props
        return (
            <label htmlFor="photo-upload" className="custom-file-upload fas">
                <div className="img-wrap img-upload">
                    <img className="image" src={this.state.src} style={{ cursor: "pointer" }} />
                </div>
                <Input type="file" name={name} args={{ onChange: this.photoUpload, style: { display: "none" }, id: "photo-upload" }} />
            </label>
        )
    }
}
export default ImgUpload