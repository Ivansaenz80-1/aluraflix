import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NewVideo from "./Pages/NewVideo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo-video" element={<NewVideo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
