import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import "../../css/Clip.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 300,
    height: 500,
    display: "block"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const ClipsGallery = props => {
  const classes = useStyles();
  // const deleteRef = useRef(null)

  const selectClip = clip => {
    props.selectClip(clip);
  };

  const handleDeleteClip = (clip) => {
    props.handleDeleteClip(clip);
  };
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ display: "none" }}>
          <ListSubheader component="div">Your Clips</ListSubheader>
        </GridListTile> */}
        {props.clipsList.map((clip, index) => (
          <GridListTile key={index} style={{ width: "100%" }}>
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
              src={`${props.url}#t=${clip.start},${clip.end}`}
            />
            <GridListTileBar
              title={clip.title}
              subtitle={<span>by: subtitle</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about LABEL GOES HERE`}
                  className={classes.icon}
                  onClick={() => handleDeleteClip(clip)}
                >
                  <HighlightOffIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>

    // <div>
    //   {props.clipsList.map((clip, index) => {
    //     return (
    //       <div key={index}>
    //         <video
    //           key={index}
    //           id="vid1"
    //           className="azuremediaplayer amp-default-skin"
    //           autoPlay={false}
    //           controls={false}
    //           width="320"
    //           height="200"
    //           poster="poster.jpg"
    //           preload="metadata"
    //           onClick={() => selectClip(clip)}
    //           src={`${props.url}#t=${clip.start},${clip.end}`}
    //         >
    //           <source type="video/mp4" />
    //         </video>
    //         <ClearIcon onClick={() => deleteClip(clip)} />
    //       </div>
    //     );
    //   })}
    // </div>
  );
};
export default ClipsGallery;
