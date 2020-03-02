import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import {DropzoneArea} from 'material-ui-dropzone'
import axios, {post} from 'axios'
 
class DropZone extends Component{

  constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
            title: '',
            description: ''
        } 
    }

    onHandleChange = (selectedFile) => {
        this.setState({
            selectedFile: selectedFile
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
        data.append('originalName', this.state.selectedFile)
        console.log(this.state.selectedFile)
        console.log(data)
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

    return (<>

        <form>
            <TextField type="text" name="title" placeholder="title" onChange={this.onHandleTitleDescriptionChange} />
            <TextField type="text" name="description" placeholder="description" onChange={this.onHandleTitleDescriptionChange} />
            <DropzoneArea 
                onChange={this.onHandleChange} maxFileSize={999999999999} dropzoneText={'Drag and drop a video file here or click'} acceptedFiles={['video/mp4']}
            />
            <h1><hr></hr></h1>
            <button className="upload-button" type="button" onClick={this.onHandleFileUpload}>Upload</button>
        </form>

    </>)  
  }
} 
 
export default DropZone;