import React from "react";
import { createRoot } from "react-dom/client";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("app"));

const App = () => {
  return (
    <div className="text-2xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>

      <div className="my-10">
        <Router>
          <Routes>
            <Route path="products/:id" element={<PDPContent />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

root.render(<App />);
