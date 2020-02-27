
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import LoadVideo from "./components/LoadVideo";


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">

      <LoadVideo />

    </div>
  );
}

export default App;
