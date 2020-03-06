const initialState = {
  videoUrl: null,
  videoTitle: null,
  playlistId: null,
  playlistTitle: null
}

const reducer = (state = initialState, action) => {

  if (action.type === 'VIDEO_INFO_SAVED') {
    return {
      ...state,
      videoUrl: action.videoUrl,
      videoTitle: action.videoTitle
    }
  }

  if (action.type === 'PLAYLIST_INFO_SAVED') {
    return {
      ...state,
      playlistId: action.playlistId,
      playlistTitle: action.playlistTitle
    }
  }

  return state 

}

export default reducer