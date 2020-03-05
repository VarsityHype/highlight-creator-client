import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios'

function PlaylistNames(props) {

    const addVideoToPlaylist = (videoUrl, playlist_reference_id) => {
        const url = 'http://localhost:3001/playlists/add-to-playlist/'
        axios.post(url, {
            playlist_reference_id: playlist_reference_id,
            source_id: videoUrl,
            isClip: false
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
                
                    <MenuItem onClick={() => addVideoToPlaylist(props.videoUrl, playlist_reference_id)}>{title}</MenuItem>
                
                </>)
            })
            setPlaylistData(playlists)
        })
    }, [])

    return (<>
    
            <FormControl>
                <Select labelId="add-to-playlist">
                    {playlistData}
                </Select>
            </FormControl>
    
    </>)

}

const mapStateToProps = (state) => {
    return {
        videoUrl: state.videoUrl
    }
}

export default connect(mapStateToProps)(PlaylistNames)