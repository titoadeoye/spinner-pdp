import React from "react";
import { createRoot } from "react-dom/client";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = createRoot(document.getElementById("app"));

const App = () => {
  return (
    <div className="text-2xl mx-auto max-w-6xl">
      <Header />

      <div className="my-10">
        <BrowserRouter>
          <Routes>
            <Route path="products/:id" element={<PDPContent />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};
{
  /* <Router>
          <Routes>
            <Route path="products/:id" element={<PDPContent />} />
          </Routes>
        </Router>  */
}
root.render(<App />);
