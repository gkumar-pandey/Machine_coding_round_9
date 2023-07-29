import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { VideoContextProvider } from "./context/video-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VideoContextProvider>
      <App />
    </VideoContextProvider>
  </React.StrictMode>
);
