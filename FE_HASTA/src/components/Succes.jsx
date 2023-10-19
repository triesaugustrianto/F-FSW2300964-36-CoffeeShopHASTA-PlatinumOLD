import React from "react";
import { succes } from "../assets";

export const Succes = ({ ket = " pesanan anda succes" }) => {
  return (
    <div className="container-fluid min-vh-100  position-relative">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <img src={succes} alt="loading" style={{ width: "150px" }} />
            <p className="text-center placeholder-glow text-success">{ket}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
