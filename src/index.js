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
import ClipPreview from "./components/ClipPreview";
import LoadVideo from "./components/LoadVideo";

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
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/test" component={Test} />
          <Route path="/clip" component={LoadVideo} />
          {/* <Route path="/load" component={LoadVideo} /> */}
        </Switch>
      </BrowserRouter>
  </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
