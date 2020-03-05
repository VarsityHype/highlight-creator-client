import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

function Video(props) {

    const getUrlAndSeeVideo = (videoUrl, videoTitle) => {
        localStorage.setItem('videoUrl', videoUrl)
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
                        <div className="container">
                            
                                <div className="video-div-inner video-container" onClick={() => getUrlAndSeeVideo(videoUrl, videoTitle)}>
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