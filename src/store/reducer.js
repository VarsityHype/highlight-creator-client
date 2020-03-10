const initialState = {
  videoUrl: null,
  videoTitle: null,
  playlistId: null,
  playlistTitle: null,
  highlightUrl: null,
  highlightTitle: null,
  highlightStart: null,
  highlightEnd: null,
  array: []
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

  if (action.type === 'HIGHLIGHT_INFO_SAVED') {
    return {
      ...state,
      highlightUrl: action.highlightUrl,
      highlightTitle: action.highlightTitle,
      highlightStart: action.highlightStart,
      highlightEnd: action.highlightEnd
    }
  }

  if (action.type === 'URLS_SAVED') {
    return {
      ...state,
      array: action.array
    }
  }

  return state 

}

export default reducer