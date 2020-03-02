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
      <Clip />
    </div>
  );
}

export default App;
