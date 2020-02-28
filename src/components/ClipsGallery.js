import React  from 'react'

const ClipsGallery = (props) => {

   const selectClip = clip => {
     props.selectClip(clip);
   };

    return (
      <div>
        
        {props.clipsList.map((clip, index) => {
            return (
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
              >
                <source
                  src={`${props.url}#t=${clip.start},${clip.stop}`}
                  type="video/mp4"
                />
              </video>
            );
        })}
      </div>
    );

  }
export default ClipsGallery