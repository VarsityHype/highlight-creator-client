import React, {Component} from 'react'
import axios, {post} from 'axios'

class UploadVideo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
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
        const description = this.state.description
        const url = 'http://localhost:3001/upload/'
        const data = new FormData()
        data.append('image', this.state.selectedFile)
        axios.post(url, data, {})
        .then(res => {
            let info = JSON.parse(localStorage.user)
            let uploader_id = info.sub
            
            let video = {
                uploader_id: `${uploader_id}`,
                azure_url: `${res.data.uploaded_url}`,
                title: title,
                description: description
                };
                fetch('http://localhost:3001/upload/uploaded', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
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
            <div>
                <p></p>
                <input type="text" name="title" placeholder="title" onChange={this.onHandleTitleDescriptionChange} />
                <input type="text" name="description" placeholder="description" onChange={this.onHandleTitleDescriptionChange} />
                <input type="file" onChange={this.onHandleChange} />
                <button type="button" onClick={this.onHandleFileUpload}>Upload</button>
            </div>
        
        </>)

    }
}

export default UploadVideo