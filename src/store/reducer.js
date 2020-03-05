const initialState = {
  videoUrl: null,
  videoTitle: ''
}

const reducer = (state = initialState, action) => {

  if (action.type === 'VIDEO_INFO_SAVED') {
    return {
      ...state,
      videoUrl: action.videoUrl,
      videoTitle: action.videoTitle
    }
  }

  return state 

}

export default reducer