import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import  ExternalApi from "./views/ExternalApi"

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ExternalApi/>
    </div>
  );
}

export default App;
