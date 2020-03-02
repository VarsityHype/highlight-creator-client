import React  from 'react'
import ClearIcon from '@material-ui/icons/Clear'

const ClipsGallery = (props) => {

   const selectClip = clip => {
     props.selectClip(clip);
   };

   const deleteClip = (clip) => {
     props.deleteClip(clip)
   }
    return (
      <div>
        
        {props.clipsList.map((clip, index) => {
            return (
              <div key={index}>
                <video
                  key={index}
                  id="vid1"
                  className="azuremediaplayer amp-default-skin"
                  autoPlay={false}
                  controls={false}
                  width="320"
                  height="200"
                  poster="poster.jpg"
                  preload="metadata"
                  onClick={() => selectClip(clip)}
                  src={`${props.url}#t=${clip.start},${clip.stop}`}
                >
                  <source type="video/mp4" />
                </video>
                <ClearIcon onClick={() => deleteClip(clip)} />
              </div>
            );
        })}
      </div>
    );

  }
export default ClipsGallery