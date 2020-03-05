import React, {useEffect, useState} from 'react'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

function PlaylistNames() {

    const [playlistData, setPlaylistData] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3001/playlists/get-playlists/'
        const token = localStorage.jwt
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(response => response.json())
        .then(json => {
            const playlists = Object.keys(json).map((playlist) => {

                return (<>
                
                    <MenuItem>{json[playlist].title}</MenuItem>
                
                </>)
            })
            setPlaylistData(playlists)
        })
    }, [])

    return (<>
    
            <FormControl>
                <InputLabel id="add-to-playlist">Add to playlist</InputLabel>
                <Select labelId="add-to-playlist">
                    {playlistData}
                </Select>
            </FormControl>
    
    </>)

}

export default PlaylistNames