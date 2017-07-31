import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import storeConfig from "./store";
import App from "./components/App";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import getMuiTheme from "material-ui/styles/getMuiTheme";

injectTapEventPlugin();
// import registerServiceWorker from './registerServiceWorker';

const store = storeConfig();

ReactDOM.render(
  <MuiThemeProvider >
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
// registerServiceWorker();
