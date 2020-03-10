import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

const styles = theme => ({
    multilineColor:{
        color:'red'
    }
});

class UploadVideo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
            thumbnail: null,
            title: '',
            description: ''
        } 
    }

    onHandleChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0],
        })
    }

    onHandleTitleDescriptionChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onHandleFileUpload = () => {

        const title = this.state.title
        const token = localStorage.jwt
        const description = this.state.description
        const url = 'https://varsityhype-highlightcreator-server.azurewebsites.net/upload/'
        const data = new FormData()
        data.append('image', this.state.selectedFile)
        axios.post(url, data, {
            headers:{"Authorization": `Bearer ${token}`}
        })
        .then(res => {
            let info = JSON.parse(localStorage.user)
            let uploader_id = info.sub
            let video = {
                uploader_id: `${uploader_id}`,
                azure_url: `${res.data.uploaded_url}`,
                title: title,
                description: description,
                thumbnail: `${this.state.thumbnail}`
                };
                axios.post('https://varsityhype-highlightcreator-server.azurewebsites.net/upload/uploaded', video).then(response => response.json())
            
        })
    }

    render() {

        return(<>
            <div className="section-1">

            <div>
                <h1>Upload a Video</h1>
            </div>
            <form autoComplete="on">
                <div className="url">
                    <p>give a title to your video:</p>
                    <div className="textField">
                        <TextField id="outlined-basic" label="Title" variant="outlined" type="text" name="title" onChange={this.onHandleTitleDescriptionChange} />
                    </div>
                    <p>add description:</p>
                    <div className="textField">
                        <TextField id="outlined-basic" label="Description" variant="outlined" type="text" name="description" onChange={this.onHandleTitleDescriptionChange} />
                    </div>

                    <div className="overlay">
                        <input type="file" onChange={this.onHandleChange} />
                        <div className="file-button">Video</div>
                    </div>
                    <button className="upload-button" type="button" onClick={this.onHandleFileUpload}>Upload</button>
                </div>
            </form>
            </div>


        </>)

    }
}

export default UploadVideo
