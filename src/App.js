import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import GuidePage from "./pages/GuidePage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </div>
  );
}
