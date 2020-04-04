import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Store } from "webext-redux";

import App from "./components/App.jsx";

const proxyStore = new Store();

const anchor = document.createElement("div");
anchor.id = "unique-anchor";

document.body.insertBefore(anchor, document.body.childNodes[0]);

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <App />
    </Provider>,
    document.getElementById("unique-anchor")
  );
});
