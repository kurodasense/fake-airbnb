import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import App from "@/App.jsx";
import "normalize.css";
import store from "@/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </StrictMode>
);
