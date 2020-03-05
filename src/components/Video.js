import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

function Video(props) {

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
                                    <div className="vidvid">
                                        <video
                                            id="vid1"
                                            className="azuremediaplayer amp-default-skin"
                                            width="280"
                                            height="140"
                                            poster=""
                                            autoPlay={false}
                                        >
                                            <source
                                            src={videoUrl}
                                            type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                    <div className="title-description-div">
                                        <div>
                                            <h1 >{videoTitle}</h1>
                                        </div>
                                    </div>
                                </div>

                                <button className="upload-button" onClick={() => addToPlaylist()}>Add to playlist</button>

                            </div>

                </>)
            })
            setVideoData(videos)
        })
    }, [])  

    return (<>
        <div className="title"><h1>Latest Videos</h1></div>
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