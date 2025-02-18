import { memo } from "react";
import { useRoutes } from "react-router-dom";

import routes from "@/router";

const App = memo(function App() {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  );
});

export default App;
