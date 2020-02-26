// src/App.js

import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import UploadVideo from './components/UploadVideo'

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <UploadVideo />
    </div>
  );
}

export default App;