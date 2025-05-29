import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import About from "../pages/About";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} /> {/* path="/" */}
          <Route path="about" element={<About />} /> {/* path="/about" */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
