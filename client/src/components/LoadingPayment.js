import React from "react";

export default function LoadingPayment({ title }) {
  return (
    <div className="payment-loading">
      <div className="spinner">
        <div className="payment-dot1"></div>
        <div className="payment-dot2"></div>
      </div>
      <div className="payment-loading-title-box">
        <span className="payment-loading-title">
          {title ? title : "Loading"}
        </span>
        <br />
        <span className="payment-loading-title">Please Wait...</span>
      </div>
    </div>
  );
}
