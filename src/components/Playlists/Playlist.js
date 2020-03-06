import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import RemoveVideoFromPlaylist from './RemoveVideoFromPlaylist'

function Playlist(props) {

    const [playlistData, setPlaylistData] = useState([])

    useEffect(() => {
        const url = `http://localhost:3001/playlists/get-playlist-videos/${props.playlistId}`
        axios.get(url)
        .then(json => {
            const playlistVideos = Object.keys(json.data).map((playlistVideo) => {
                let videoUrl = json.data[playlistVideo].source_id

                return (<>
                
                        <video
                            id="vid1"
                            className="azuremediaplayer amp-default-skin"
                            controls
                            autoPlay
                            width="640"
                            height="400"
                            poster="poster.jpg"
                        >
                            <source src={videoUrl} />
                        </video>
                        <RemoveVideoFromPlaylist />
                
                </>)
            })
            setPlaylistData(playlistVideos)
        })
    }, [])

    return (<>

        <h1>{props.playlistTitle}</h1>
        {playlistData}

    </>)

}

const mapStateToProps = (state) => {
    return {
        playlistId: state.playlistId ?? localStorage.getItem('playlistId'),
        playlistTitle: state.playlistTitle ?? localStorage.getItem('playlistTitle')
    }
}

export default connect(mapStateToProps)(Playlist)