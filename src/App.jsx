import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Templates from "./components/Templates";
import Portofolio from "./components/Portofolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/templates"
          element={<Templates variant="full" showFilters={true} />}
        />
        <Route
          path="/portfolio"
          element={<Portofolio variant="full" showFilters={true} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
