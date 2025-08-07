import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51RrBz9Pbu0R0VHtx4ZofRmEbUD0RZbyGQ7H2emZrpyWYGjzAJwqI6Kbty3MZ08yZ8B3kJvRYyutkBTkXdHnfZe4N000nhh4ojr');
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  // </React.StrictMode>
)