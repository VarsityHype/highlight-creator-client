import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

function Playlist(props) {

    const [playlistData, setPlaylistData] = useState([])

    useEffect(() => {
        const url = ''
        axios.get(url)
    })

    return (<>

        <h1>{props.playlistTitle}</h1>
        {props.playlistId}
    
    </>)

}

const mapStateToProps = (state) => {
    return {
        playlistId: state.playlistId ?? localStorage.getItem('playlistId'),
        playlistTitle: state.playlistTitle ?? localStorage.getItem('playlistTitle')
    }
}

export default connect(mapStateToProps)(Playlist)