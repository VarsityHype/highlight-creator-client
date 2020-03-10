import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

function Playlist(props) {

    const removeVideo = (videoUrl) => {
        const url = 'https://varsityhype-highlightcreator-server.azurewebsites.net/playlists/remove-from-playlist'
        axios.post(url, {
            source_id: videoUrl
        })
    }

    const [playlistData, setPlaylistData] = useState([])

    useEffect(() => {
        const url = `https://varsityhype-highlightcreator-server.azurewebsites.net/playlists/get-playlist-videos/${props.playlistId}`
        axios.get(url)
        
        .then(json => {
            const playlistVideos = Object.keys(json.data).map((playlistVideo) => {
                let videoUrl = json.data[playlistVideo].source_id
                    return (<>
                
                        <div>
                            <video
                                id="vid1"
                                className="azuremediaplayer amp-default-skin"
                                controls
                                autoPlay={true}
                                width="640"
                                height="400"
                                onEnded={() => console.log('ended')}
                                poster="poster.jpg"
                            >
                                <source src={videoUrl} />
                            </video>
                            <button className="upload-button" onClick={() => removeVideo(videoUrl)}>Remove from playlist</button>
                        </div>
    
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