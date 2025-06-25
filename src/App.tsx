import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/NavbarAndFooter/Navbar";
import { Footer } from "./layout/NavbarAndFooter/Footer";
import { HomePage } from "./layout/HomePage/HomePage";
import { SearchBooksPage } from "./layout/SearchBooksPage/SearchBooksPage";
import { BookCheckoutPage } from "./layout/BookCheckoutPage/BookCheckoutPage";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth } from "@okta/okta-auth-js";
import { Security, LoginCallback } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";

const oktaAuth = new OktaAuth(oktaConfig);

const App = () => {
  const customAuthHandler = () => {
    window.location.href = '/login';
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    window.location.href = originalUri || '/';
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchBooksPage />} />
            <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />
            <Route path='/login' element={<LoginWidget config={oktaConfig} />} />
            <Route path='/login/callback' element={<LoginCallback />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Security>
  );
};

export default App;
