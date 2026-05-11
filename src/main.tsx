// src/main.tsx
// This file starts the React app and wraps it with the global voting provider.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VotingProvider } from "./context/VotingContext";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VotingProvider>
      <App />
    </VotingProvider>
  </React.StrictMode>
);