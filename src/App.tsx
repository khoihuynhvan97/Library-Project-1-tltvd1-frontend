import React from "react";
import "./App.css";
import { Navbar } from "./layout/NavbarAndFooter/Navbar";
import { Footer } from "./layout/NavbarAndFooter/Footer";
import { HomePage } from "./layout/HomePage/HomePage";
import { SearchBooksPage } from "./layout/SearchBooksPage/SearchBooksPage";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchBooksPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
