import React from "react";
import { useAuth0 } from "./react-auth0-spa";

import LoadVideo from "./components/LoadVideo";


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <h1>VarsityHype</h1>
      <LoadVideo />

    </div>
  );
}

export default App;
