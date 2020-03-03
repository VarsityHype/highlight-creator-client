import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

function Video(props) {

    const getUrlAndSeeVideo = (videoUrl, videoTitle) => {
        props.getUrl(videoUrl, videoTitle)
        props.history.push("/clips")
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

                    <div className="video-div">
                        <div className="video-div-inner">
                            <video
                                id="vid1"
                                className="azuremediaplayer amp-default-skin video-page-video"
                                controls
                                width="640"
                                height="400"
                                poster="poster.jpg"
                                autoPlay={false}
                            >
                                <source
                                src={videoUrl}
                                type="video/mp4"
                                />
                            </video>
                            <div className="title-description-div">
                                <div className="h1-title-div">
                                    <h1 onClick={() => getUrlAndSeeVideo(videoUrl, videoTitle)}>{videoTitle}</h1>
                                </div>
                                <p>{video.description}</p>
                            </div>
                        </div>
                    </div>

                </>)
            })
            setVideoData(videos)
        })
    }, [])  

    return (<>
    
        {videoData}
    
    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        getUrl: (newVideoUrl, newVideoTitle) => dispatch({type: 'VIDEO_INFO_SAVED', videoUrl: newVideoUrl, videoTitle: newVideoTitle})
    }
}

export default connect(null, mapDispatchToProps)(Video)