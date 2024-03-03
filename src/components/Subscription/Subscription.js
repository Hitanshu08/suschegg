import React from "react";
import "./Subscription.css";

export const Subscription = () => {
  const passes = [
    { title: "1 Day Pass", value: 80, currency: "₹" },
    { title: "1 Week Pass", value: 500, currency: "₹" },
    { title: "15 Days Pass", value: 1250, currency: "₹" },
    { title: "1 Month Pass", value: 2250, currency: "₹" },
    { title: "Half Year Pass", value: 12000, currency: "₹" },
    { title: "1 Year Pass", value: 22500, currency: "₹" },
  ];

  return (
    <div className="container">
      <div className="heading">Subscription</div>
      <div className="subscription-grid">
        {passes.map((pass, index) => (
          <div
            className="subscription-item-container"
            key={index}>
            <div className="subscription-item-title">{pass.title}</div>
            <div className="subscription-item-value">
              <span className="currancy">{pass.currency} </span>
              {pass.value}
            </div>
            <button className="buy-button button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
