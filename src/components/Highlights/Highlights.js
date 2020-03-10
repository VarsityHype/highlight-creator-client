import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

function Highlights(props) {

    const getClipAndSeeHighlight = (highlightUrl, highlightTitle, highlightStart, highlightEnd) => {
        localStorage.setItem('highlightUrl', highlightUrl)
        localStorage.setItem('highlightTitle', highlightTitle)
        localStorage.setItem('highlightStart', highlightStart)
        localStorage.setItem('highlightEnd', highlightEnd)
        props.getHighlightInfo(highlightUrl, highlightTitle, highlightStart, highlightEnd)
        props.history.push('/highlight')
    }

    const deleteHighlight = (highlightId) => {
        const url = 'http://localhost:3001/clips/delete-clip/'
        axios.post(url, {
            id: highlightId
        })
        .then(window.location.href = '/your-highlights')
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
                let highlightId = json.data[clip].id
            
                return (<>
                
                        <div>
                            <h3>{title}</h3>
                            <video
                                id="vid1"
                                className="azuremediaplayer amp-default-skin"
                                controls
                                autoPlay={true}
                                width="640"
                                height="400"
                                poster="poster.jpg"
                            >
                                <source src={highlightUrl} />
                            </video>
                            <button className="upload-button" onClick={() => getClipAndSeeHighlight(highlightUrl, title, start, end)}>View highlight</button>
                        </div>
                        <div>
                            <button onClick={() => deleteHighlight(highlightId)}>Delete highlight</button>
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
        getHighlightInfo: (newhighlightUrl, newhighlightTitle, newhighlightStart, newhighlightEnd) => dispatch({
            type: 'HIGHLIGHT_INFO_SAVED', highlightUrl: newhighlightUrl, highlightTitle: newhighlightTitle, highlightStart: newhighlightStart, highlightEnd: newhighlightEnd
        })
    }
}

export default connect(null, mapDispatchToProps)(Highlights)