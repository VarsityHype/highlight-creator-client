// src/components/Profile.js

import React, { Fragment } from "react";
import PlaylistNames from "./PlaylistNames"
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>not logged in</div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" width="100px" />
      <h2>{user.nickname}</h2>
      <p>{user.email}</p>
      <PlaylistNames />
    </Fragment>
  );
};

export default Profile;