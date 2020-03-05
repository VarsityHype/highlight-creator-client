import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducer from "./store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Test from "./components/Test";
import Clip from "./components/Clips/Clip";
import NavBar from "./components/NavBar"
import UploadVideo from "./components/UploadVideo";
import Video from "./components/Video"
import PlaylistsMenu from "./components/PlaylistsMenu"
import Profile from "./components/Profile"
import axios from 'axios'

// CSS IMPORTS
import './css/AppBar.css'
import './css/Video.css'
import './css/App.css'
import './css/PlaylistsMenu.css'

// axios authorization headers

let user = JSON.parse(localStorage.user)
let creator_id = user.sub
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwt}`;
axios.defaults.headers.common['request_user_id'] = creator_id;
axios.defaults.headers.common['Content-Type'] = 'applicaton/json'

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
  console.log(window.location.pathname);
};

const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const videoUrl = localStorage.getItem('videoUrl')



//persistVideoUrl(videoUrl)

ReactDOM.render(
  <Provider store={store}>
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/test" component={Test} />
          <Route path="/clips" component={Clip} />
          <Route path="/upload" component={UploadVideo} />
          <Route path="/video" component={Video} />
          <Route path="/playlists" component={PlaylistsMenu} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
  </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
