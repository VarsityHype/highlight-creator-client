import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios'

function HighlightPlaylistNames(props) {

    const addHighlightToPlaylist = (highlightUrl, playlist_reference_id) => {
        const url = 'http://localhost:3001/playlists/add-to-playlist/'
        axios.post(url, {
            playlist_reference_id: playlist_reference_id,
            source_id: highlightUrl,
            isClip: true
        })
    }

    const [playlistData, setPlaylistData] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/playlists/get-playlists/'
        axios.get(url)
        .then(json => {
            const playlists = Object.keys(json.data).map((playlist) => {
                let title = json.data[playlist].title
                let playlist_reference_id = json.data[playlist].id

                return (<>
                
                    <MenuItem onClick={() => addHighlightToPlaylist(props.highlightUrl, playlist_reference_id)}>{title}</MenuItem>
                
                </>)
            })
            setPlaylistData(playlists)
        })
    }, [])

    return (<>
    
            <FormControl>
                <h3>Add to playlist</h3>
                <Select labelId="add-to-playlist">
                    {playlistData}
                </Select>
            </FormControl>
    
    </>)

}

const mapStateToProps = (state) => {
    return {
        highlightUrl: state.highlightUrl ?? localStorage.getItem('highlightUrl')
    }
}

export default connect(mapStateToProps)(HighlightPlaylistNames)