import React from "react";
import Header from "./static/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./static/Footer";
import PiggyBank from "./pages/PiggyBank";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/piggybank" element={<PiggyBank />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
