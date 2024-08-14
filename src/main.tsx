import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./pages/MainPage";
import MainContent from "./pages/MainContent";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrLlamaContent from "./pages/DrLlamaContent";
import CarrefourSOTContent from "./pages/CarrefourSOTContent";
import WintaylorContent from "./pages/WintaylorContent";
import KarzaContent from "./pages/KarzaContent";
import CetrixContent from "./pages/CetrixContent";
import GFGSearchContent from "./pages/GFGSearchContent";
import BlueMetricsContent from "./pages/BlueMetricsContent";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/portfolio/drllama" element={<DrLlamaContent />} />
          <Route
            path="/portfolio/carrefour-sot"
            element={<CarrefourSOTContent />}
          />
          <Route path="/portfolio/wintaylor" element={<WintaylorContent />} />
          <Route path="/portfolio/karza" element={<KarzaContent />} />
          <Route path="/portfolio/cetrix" element={<CetrixContent />} />
          <Route path="/portfolio/gfg-search" element={<GFGSearchContent />} />
          <Route
            path="/portfolio/bluemetrics"
            element={<BlueMetricsContent />}
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
