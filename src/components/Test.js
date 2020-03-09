import React, { useEffect } from "react";
import {useRef} from 'react'

// Component for testing Redux (Delete when ready)
function Test() {

  let splitUrl = "https://astorageserver.blob.core.windows.net/video-storagea/23176022522508344-47c6ab69-ca8d-4be7-8962-8c5bdcf86d49.MP4#t=3,11"
  let equalSplitUrl = splitUrl.split("=")[1]
  let timeNumbers = equalSplitUrl.split(",")
  console.log(timeNumbers)

  /*
  const vidRef = useRef()
  useEffect(() => {
    const timer = setTimout(() => {
      console.log(vidRef.current.duration)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])
  */

    return (<>
          <div>
            <h1>Testing</h1>
          </div>
          <div>
            <video
              //ref={vidRef}
              src="https://astorageserver.blob.core.windows.net/video-storagea/23176022522508344-47c6ab69-ca8d-4be7-8962-8c5bdcf86d49.MP4#t=3,11"
              controls={true}
              autoPlay={true}
              width="640"
              height="400"
            />
          </div>
        </>);
}

export default Test;

