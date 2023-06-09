import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//index.html의 'root'div를 저장하는 변수
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

reportWebVitals();
