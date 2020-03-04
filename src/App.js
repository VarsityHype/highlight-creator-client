import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import  ExternalApi from "./views/ExternalApi"
import Profile from "./components/Profile"


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="body">
      <ExternalApi/>
    </div>
  );
}

export default App;
