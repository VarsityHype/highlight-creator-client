import React, {Component} from 'react'
import axios, {post} from 'axios'

class UploadVideo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null
        } 
    }

    onHandleChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0,
            [e.target.name]: e.target.value
        })
    }

    onHandleFileUpload = () => {
        const url = 'http://localhost:3001/video/upload'
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post(url, data, {})
        .then(res => {
            console.log(res.statusText)
        })
    }
    

    render() {

        return(<>
        
            <div>
                <h1>Upload a Video</h1>
            </div>
            <div>
                <input type="text" name="title" placeholder="title" onChange={this.onHandleChange} />
                <input type="text" name="description" placeholder="description" onChange={this.onHandleChange} />
                <input type="hidden" name="title" placeholder="title" onChange={this.onHandleChange} value="uploader_id" />
                <input type="file" onChange={this.onHandleChange} />
                <button type="button" onClick={this.onHandleFileUpload}>Upload</button>
            </div>
        
        </>)

    }
}

export default UploadVideo