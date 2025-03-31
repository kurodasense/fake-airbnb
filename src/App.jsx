import { memo } from "react";

import routes from "@/router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import useScrollTop from "./hooks/useScrollTop";
import { useRoutes } from "react-router-dom";

const App = memo(function App() {
  useScrollTop();
  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
