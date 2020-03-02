import React, {useEffect, useState} from 'react'

function Video() {

    const [videoData, setVideoData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/video/')
        .then(response => response.json())
        .then(json => {
            const videos = json.map((video) => {
                return(<>

                    <video
                        id="vid1"
                        className="azuremediaplayer amp-default-skin"
                        controls
                        width="640"
                        height="400"
                        poster="poster.jpg"
                    >
                        <source
                        src={video.azure_url}
                        type="video/mp4"
                        />
                    </video>
                    <p>{video.title}</p>
                    <p>{video.description}</p>

                </>)
            })
            setVideoData(videos)
        })
    }, [])  

    return (<>
    
        {videoData}
    
    </>)

}

export default Video