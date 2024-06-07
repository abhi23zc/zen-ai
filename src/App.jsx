import React from "react";
import Home from "./components/Home/Home";
import { Provider } from "./components/contextApi/Context.jsx";
function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
