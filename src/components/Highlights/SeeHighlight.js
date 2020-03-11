import React from 'react'
import HighlightPlaylistNames from './HighlightPlaylistNames'
import {connect} from 'react-redux'

function SeeHighlight(props) {

    return(<>
    
            <div className="upload-grid">
                <h1>{props.hightlightTitle}</h1>
                <p>starts at {props.hightlightStart}, ends at {props.hightlightEnd}</p>
                <video
                    id="vid1"
                    className="azuremediaplayer amp-default-skin"
                    controls
                    autoPlay
                    width="640"
                    height="400"
                    poster="poster.jpg"
                >
                    <source src={props.hightlightUrl} />
                </video>
                <HighlightPlaylistNames />
            </div>
    
    </>)

}

const mapStateToProps = (state) => {
    return {
        hightlightUrl: state.hightlightUrl ?? localStorage.getItem('highlightUrl'),
        hightlightTitle: state.hightlightTitle ?? localStorage.getItem('highlightTitle'),
        hightlightStart: state.hightlightStart ?? localStorage.getItem('highlightStart'),
        hightlightEnd: state.hightlightEnd ?? localStorage.getItem('highlightEnd')
    }
}

export default connect(mapStateToProps)(SeeHighlight)