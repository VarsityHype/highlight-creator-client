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

    const goToPlaylist = () => {

    }

    const [playlistData, setPlaylistData] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/playlists/get-playlists/'
        let token = localStorage.jwt
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(json => {
            const playlists = Object.keys(json).map((playlist) => {
                let title = json[playlist].title

                return (<>
                
                    <div onClick={() => goToPlaylist()} className="playlist-titles-div">
                        <p>{title}</p>
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
        
    }
}

export default connect(null, mapDispatchToProps)(PlaylistsMenu)