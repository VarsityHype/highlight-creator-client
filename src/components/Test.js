import React, { useEffect, useState } from "react";
import {connect} from 'react-redux'
import {useRef} from 'react'
import ReactPlayer from 'react-player'
import axios from "axios";

// Component for testing Redux (Delete when ready)
function Test(props) {

  /*
  let splitUrl = "https://astorageserver.blob.core.windows.net/video-storagea/23176022522508344-47c6ab69-ca8d-4be7-8962-8c5bdcf86d49.MP4#t=3,11"
  let equalSplitUrl = splitUrl.split("=")[1]
  let timeNumbers = equalSplitUrl.split(",")
  console.log(timeNumbers)
  */

  /*
  const vidRef = useRef()
  useEffect(() => {
    const timer = setTimout(() => {
      console.log(vidRef.current.duration)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  */

  /*
  const vidRef = React.createRef()

  const seek = () => {
      console.log(vidRef.current.seekTo)
  }
  */

  const [test, setTest] = useState([])

  useEffect(() => {
    const url2 = 'https://varsityhype-highlightcreator-server.azurewebsites.net/clips/view-clips/'
    axios.get(url2)
    .then(json => {
      const testing = Object.keys(json.data).map((clip) => {
        let highlightUrl = json.data[clip].source_video_id

            return (<>

                    {highlightUrl}

            </>)
          })
          let array = []
          testing.forEach(item => {
            array.push(item.props.children)
          })
          setTest(array)
    })
  }, [])

  const playNext = () => {
    
  }

    return (<>
          <button onClick={() => props.startPlaying(test)}>start playing videos</button>
          <div>
            <h1>Testing</h1>
          </div>
          <div>
            <ReactPlayer
              //ref={vidRef}
              url={test}
              controls={true}
              autoPlay={true}
              onEnded={playNext()}
              onPause={playNext()}
              width="640"
              height="400"
            />
          </div>
        </>);
}

const mapDispatchToProps = (dispatch) => {
  return {
    startPlaying: (newArray) => dispatch({type: 'URLS_SAVED', array: newArray})
  }
}

const mapStateToProps = (state) => {
  return {
    array: state.array
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);

//          <button onClick={() => seek()}>Seeeeeek</button>
