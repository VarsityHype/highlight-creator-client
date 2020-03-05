import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

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
        const url = 'http://localhost:3001/upload/'
        const data = new FormData()
        data.append('image', this.state.selectedFile)
        axios.post(url, data, {
            headers:{"Authorization": `Bearer ${token}`}
        })
        .then(res => {
            let info = JSON.parse(localStorage.user)
            let token = localStorage.jwt
            let uploader_id = info.sub
            let video = {
                uploader_id: `${uploader_id}`,
                azure_url: `${res.data.uploaded_url}`,
                title: title,
                description: description,
                thumbnail: `${this.state.thumbnail}`
                };
                fetch('http://localhost:3001/upload/uploaded', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                  },
                  body: JSON.stringify(video)
                }).then(response => response.json())
            
        })
    }

    render() {

        return(<>

            <div>
                <h1>Upload a Video</h1>
            </div>
            <form autoComplete="on">
                <div>
                    <div className="textField">
                        <TextField id="outlined-basic"  label="Title" variant="outlined" type="text" name="title"  onChange={this.onHandleTitleDescriptionChange} />
                    </div>
                    <div className="textField">
                        <TextField id="outlined-basic" label="Description" variant="outlined" type="text" name="description" onChange={this.onHandleTitleDescriptionChange} />
                    </div>

                    <div className="overlay">
                        <input type="file" onChange={this.onHandleChange} />
                        <div className="upload-button">Video</div>
                    </div>
                    <button className="upload-button" type="button" onClick={this.onHandleFileUpload}>Upload</button>
                </div>
            </form>


        </>)

    }
}

export default UploadVideo
