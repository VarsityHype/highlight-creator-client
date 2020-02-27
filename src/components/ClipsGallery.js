import React  from 'react'

const ClipsGallery = (props) => {
    console.log(props)
    return (
      <div>
        
        {props.clipsList.map(clips => {
            return (
              <video
                id="vid1"
                className="azuremediaplayer amp-default-skin"
                autoPlay={false}
                controls={false}
                width="320"
                height="200"
                poster="poster.jpg"
                preload="metadata"
              >
                <source
                  src={`${props.url}#t=${clips.start},${clips.stop}`}
                  type="video/mp4"
                />
              </video>
            );
        })}
      </div>
    );
}

export default ClipsGallery