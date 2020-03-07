import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

function Highlights(props) {

    const getClipAndSeeHighlight = (clipUrl, clipTitle) => {

    }

    const [clipsData, setClipsData] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/clips/view-clips/'
        axios.get(url)
        .then(json => {
            const clips = Object.keys(json.data).map((clip) => {
                let start = json.data[clip].start_timestamp
                let end = json.data[clip].end_timestamp
                let title = json.data[clip].title
                let highlightUrl = json.data[clip].source_video_id
            
                return (<>
                
                        <div>
                            <h3>{title}</h3>
                            <video
                                id="vid1"
                                className="azuremediaplayer amp-default-skin"
                                controls
                                autoPlay={false}
                                width="640"
                                height="400"
                                poster="poster.jpg"
                            >
                                <source src={highlightUrl} />
                            </video>
                        </div>
                
                </>)
            })
            setClipsData(clips)
        })
    }, [])

return (<>

        <div>
            <h1>Your Highlights</h1>
            {clipsData}
        </div>

</>)

}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(Highlights)