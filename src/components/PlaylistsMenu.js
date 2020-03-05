import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

function PlaylistsMenu() {

//clip id, user id, playlist id

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

    const [playlistData, setPlaylistData] = useState({})

    useEffect(() => {
        const url = ''
        fetch(url)
        .then(response => response.json())
        .then(json => {
            const playlists = json.map((playlist) => {


                return (<>
                
                    
                
                </>)
            })
            setPlaylistData(playlists)
        })
    }, [])

    return (<>
    
        <h1>Playlists</h1>
        <input name="title" placeholder="playlist title" onChange={handleChange} />
        <input name="description" placeholder="playlist description" onChange={handleChange} />
        <button onClick={() => createPlaylists()}>Create a playlist</button>

    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(PlaylistsMenu)