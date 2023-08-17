import React, { useState, useEffect } from "react";
import "./App.css";

console.log("start");
/* Default front end book icon */

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

/* Fetching endpoint */

  useEffect(() => {

    const query = new URLSearchParams(window.location.search);
    console.log(Object.fromEntries(query));

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
     
    }

    if (query.get("canceled")) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}