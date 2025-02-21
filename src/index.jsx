import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import App from "@/App.jsx";
import "normalize.css";
import "@/assets/css/variables.less";
import store from "@/store";
import theme from "@/assets/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback="loading">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </StrictMode>
);
