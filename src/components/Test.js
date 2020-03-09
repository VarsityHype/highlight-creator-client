import React, {Component} from "react";
import ReactPlayer from 'react-player'

// Component for testing Redux (Delete when ready)
class Test extends Component {
  constructor(props) {
    super(props)
    this.player = React.createRef()

    this.state = {
      targetTimestamp: 12
    }
  }

render() {
    return (<>
          <div>
            <h1>Testing</h1>
          </div>
          <div>
            <ReactPlayer
              url="https://astorageserver.blob.core.windows.net/video-storagea/9419186774465369-8911870163918805-8861367419101975-Cute Cat - 3092.mp4"
              playing={true}
              controls={true}
              //ref={this.player.current.seekTo(this.targetTimestamp)}
            />
          </div>
        </>);
      };
}


export default Test;

//http://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest
