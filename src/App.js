import React from "react";
import { useAuth0 } from "./react-auth0-spa";

import Clip from "./components/Clips/Clip";


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <h1>VarsityHype</h1>
      <Clip />

    </div>
  );
}

export default App;
