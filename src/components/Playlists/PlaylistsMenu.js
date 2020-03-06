import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

function PlaylistsMenu(props) {

    const [newPlaylist, setNewPlaylist] = useState({})

    const handleChange = (e) => {
        setNewPlaylist({
            ...newPlaylist,
            [e.target.name]: e.target.value
        })
    }

    const createPlaylists = () => {
        const url = 'http://localhost:3001/playlists/create-playlist'
        axios.post(url, {
            newPlaylist
        })
    }

    const getplaylistIdAndGoToPlaylist = (playlistId, playlistTitle) => {
        localStorage.setItem('playlistId', playlistId)
        localStorage.setItem('playlistTitle', playlistTitle)
        props.getPlaylistId(playlistId, playlistTitle)
        props.history.push('playlist')
    }

    const [playlistData, setPlaylistData] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/playlists/get-playlists/'
        axios.get(url)
        .then(json => {
            const playlists = Object.keys(json.data).map((playlist) => {
                let playlistTitle = json.data[playlist].title
                let playlistId = json.data[playlist].id

                return (<>
                
                    <div onClick={() => getplaylistIdAndGoToPlaylist(playlistId, playlistTitle)} className="playlist-titles-div">
                        <p>{playlistTitle}</p>
                    </div>
                
                </>)
            })
            setPlaylistData(playlists)
        })
    }, [])

    return (<>
    
        <h1>Playlists</h1>
        {playlistData}
        <div>
            <input name="title" placeholder="playlist title" onChange={handleChange} />
            <input name="description" placeholder="playlist description" onChange={handleChange} />
            <button onClick={() => createPlaylists()}>Create a playlist</button>
        </div>

    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlaylistId: (newPlaylistId, newPlaylistTitle) => dispatch({type: 'PLAYLIST_INFO_SAVED', playlistId: newPlaylistId, playlistTitle: newPlaylistTitle})
    }
}

export default connect(null, mapDispatchToProps)(PlaylistsMenu)