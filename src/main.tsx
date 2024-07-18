import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./pages/MainPage";
import MainContent from "./pages/MainContent";

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} >
          <Route path="/" element={<MainContent/>} />
        </Route>
      </Routes>
    </Router>

  </React.StrictMode>,
);
