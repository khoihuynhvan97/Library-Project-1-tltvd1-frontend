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
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import { ReviewListPage } from "./layout/BookCheckoutPage/ReviewListPage/ReviewListPage";
import { ShelfPage } from "./layout/ShelfPage/ShelfPage";
import RequireAuth from "./layout/Utils/RequireAuth";
import { MessagesPage } from "./layout/MessagesPage/MessagesPage";
import { ManageLibraryPage } from "./layout/ManageLibraryPage.tsx/ManageLibraryPage";
import { PaymentPage } from "./layout/PaymentPage/PaymentPage";
const oktaAuth = new OktaAuth(oktaConfig);

const App = () => {
  const customAuthHandler = () => {
    window.location.href = "/login";
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    window.location.href = originalUri || "/";
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchBooksPage />} />
            <Route path="/reviewlist/:bookId" element={<ReviewListPage />} />
            <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />
            <Route path="/login" element={<LoginWidget config={oktaConfig} />}/>
            <Route path="/login/callback" element={<LoginCallback />} />
            <Route path="/shelf" element={ <RequireAuth> <ShelfPage /> </RequireAuth> }/>
            <Route path="/messages" element={ <RequireAuth> <MessagesPage /> </RequireAuth> }/>
            <Route path="/admin" element={ <RequireAuth> <ManageLibraryPage /> </RequireAuth> }/>
            <Route path="/fees" element={ <RequireAuth> <PaymentPage/> </RequireAuth> }/>


            {/* <SecureRoute path='/shelf' element={<ShelfPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Security>
  );
};

export default App;
