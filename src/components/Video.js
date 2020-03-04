import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios'

function Video(props) {

    const [playlistData, setPlaylistData] = useState({})

    useEffect(() => {
        const url = ''
        fetch(url)
        .then(response => response.json())
        .then(json => {
            const playlists = json.map((playlist) => {


                return (<>
                
                    
                
                </>)
            })
            setPlaylistData(playlists)
        })
    }, [])

    const getUrlAndSeeVideo = (videoUrl, videoTitle) => {
        props.getUrl(videoUrl, videoTitle)
        props.history.push("/clips")
    }

    const addToPlaylist = () => {
        const url = ''    
        axios.post(url, {

        })
    }

    const [videoData, setVideoData] = useState([])
    

    useEffect((props) => {
        fetch('http://localhost:3001/video/')
        .then(response => response.json())
        .then(json => {
            const videos = json.map((video) => {

                let videoUrl = video.azure_url
                let videoTitle = video.title
                
                return(<>
                        <div className="container video-container" onClick={() => getUrlAndSeeVideo(videoUrl, videoTitle)}>
                            
                                <div className="video-div-inner">
                                    <video
                                        id="vid1"
                                        className="azuremediaplayer amp-default-skin"
                                        width="340"
                                        height="200"
                                        poster=""
                                        autoPlay={false}
                                    >
                                        <source
                                        src={videoUrl}
                                        type="video/mp4"
                                        />
                                    </video>
                                    <div className="title-description-div">
                                        <div>
                                            <h1 >{videoTitle}</h1>
                                        </div>
                                    </div>
                                </div>
                                <FormControl>
                                    <InputLabel id="add-to-playlist">Add to playlist</InputLabel>
                                    <Select labelId="add-to-playlist">
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <p>{video.description}</p>

                            </div>

                </>)
            })
            setVideoData(videos)
        })
    }, [])  

    return (<>
        <div className="test">
        {videoData}
        </div>

    
    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        getUrl: (newVideoUrl, newVideoTitle) => dispatch({type: 'VIDEO_INFO_SAVED', videoUrl: newVideoUrl, videoTitle: newVideoTitle})
    }
}

export default connect(null, mapDispatchToProps)(Video)