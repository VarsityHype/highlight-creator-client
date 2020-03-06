import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

function Video(props) {

    const getUrlAndSeeVideo = (videoUrl, videoTitle) => {
        localStorage.setItem('videoUrl', videoUrl)
        localStorage.setItem('videoTitle', videoTitle)
        props.getUrl(videoUrl, videoTitle)
        props.history.push("/clips")
    }

    const [videoData, setVideoData] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3001/video/')
        .then(json => {
            console.log(json.data)
            const videos = Object.keys(json.data).map((video) => {
                let videoUrl = json.data[video].azure_url
                let videoTitle = json.data[video].title
                
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

                            </div>

                </>)
            })
            setVideoData(videos)
        })
    }, [])  

    return (<>
        <div className="title">
            <img src= { require('./logo.png') } width="200"></img>
            <div className="paragraph">
                <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore <br></br> et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco <br></br> laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit <br></br> esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h3>

            </div>
        </div>
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