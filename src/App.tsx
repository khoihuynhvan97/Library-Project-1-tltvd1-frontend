import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/NavbarAndFooter/Navbar";
import { Footer } from "./layout/NavbarAndFooter/Footer";
import { HomePage } from "./layout/HomePage/HomePage";
import { SearchBooksPage } from "./layout/SearchBooksPage/SearchBooksPage";
import { BookCheckoutPage } from "./layout/BookCheckoutPage/BookCheckoutPage";
export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchBooksPage />} />
          <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
};
