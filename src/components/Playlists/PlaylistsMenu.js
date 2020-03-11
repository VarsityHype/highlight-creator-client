import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'
import {connect} from 'react-redux'

function PlaylistsMenu(props) {

    // create playlist
    const [newPlaylist, setNewPlaylist] = useState({})

    const handleChange = (e) => {
        setNewPlaylist({
            ...newPlaylist,
            [e.target.name]: e.target.value
        })
    }

    const createPlaylist = () => {
        const url = 'http://localhost:3001/playlists/create-playlist'
        axios.post(url, {
            newPlaylist
        })
        .then(window.location.href = '/your-playlists')
    }

    // delete playlist
    const deletePlaylist = (playlistId) => {
        const url = 'http://localhost:3001/playlists/delete-playlist'
        axios.post(url, {
            id: playlistId
        })
        .then(window.location.href = '/your-playlists')
    }

    // go to clicked playlist 
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
                
                    <div className="playlist-titles-div">
                        <div className="playlist-div" onClick={() => getplaylistIdAndGoToPlaylist(playlistId, playlistTitle)}>
                            <p>{playlistTitle}</p>
                        </div>
                        <div>
                            <CloseIcon className="remove-playlist-button" onClick={() => deletePlaylist(playlistId)}>Remove playlist</CloseIcon>
                        </div>
                    </div>
                
                </>)
            })
            setPlaylistData(playlists)
        })
    }, [])

    return (<>
        <div className="upload-grid">
        <h1>Your Playlists</h1>
        {playlistData}
        <div className="create-playlist-div">
            <TextField id="outlined-basic" label="title" variant="outlined" name="title" placeholder="playlist title" onChange={handleChange} />
            <TextField id="outlined-basic" label="description" variant="outlined" name="description" placeholder="playlist description" onChange={handleChange} />
            <button className="upload-button" onClick={() => createPlaylist()}>Create a playlist</button>
        </div>
        </div>

    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        getPlaylistId: (newPlaylistId, newPlaylistTitle) => dispatch({type: 'PLAYLIST_INFO_SAVED', playlistId: newPlaylistId, playlistTitle: newPlaylistTitle})
    }
}

export default connect(null, mapDispatchToProps)(PlaylistsMenu)