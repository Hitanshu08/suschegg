import React from "react";
import "./Store.css";

export const Store = () => {
  const passes = [
    { product: "Grammarly", duration: "1 month", value: 80, currency: "₹" },
    { product: "Quillbot", duration: "1 month", value: 500, currency: "₹" },
    { product: "Envato", duration: "1 month", value: 1250, currency: "₹" },
    { product: "Grammarly", duration: "1 month", value: 2250, currency: "₹" },
    { product: "Grammarly", duration: "1 month", value: 12000, currency: "₹" },
    { product: "Quillbot", duration: "1 month", value: 22500, currency: "₹" },
  ];

  return (
    <div className="container">
      <div className="heading">Store</div>
      <div className="store-grid">
        {passes.map((pass, index) => (
          <div
            className="store-item-container"
            key={index}>
            <div className="store-item-product">{pass.product}</div>
            <div className="store-item-duration">{pass.duration}</div>
            <div className="store-item-value">
              <span className="currancy">{pass.currency} </span>
              {pass.value}
            </div>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
