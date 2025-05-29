import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from "./App.tsx";
import AppRoutes from "./routes/AppRoutes";
// import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <AppRoutes />
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import AppRoutes from "./routes/AppRoutes";
// import "./styles/globals.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <AppRoutes />
//   </React.StrictMode>
// );
