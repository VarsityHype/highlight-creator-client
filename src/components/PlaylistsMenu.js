import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

function PlaylistsMenu() {

    const createPlaylists = () => {

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
        <button onClick={() => createPlaylists()}>Create a playlist</button>

    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(PlaylistsMenu)