import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import MapListPage from "./pages/MapListPage";
import GuidePage from "./pages/GuidePage";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/map/mid/:mid" element={<MapListPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </div>
  );
}
