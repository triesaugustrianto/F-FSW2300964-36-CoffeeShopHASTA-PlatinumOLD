import React from "react";
import { nulls } from "../assets";

export const NotFound = ({ ket = "Maaf data tidak ada" }) => {
  return (
    <div className="container-fluid min-vh-100  position-relative">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <img src={nulls} alt="loading" style={{ width: "150px" }} />
            <p className="text-center placeholder-glow">{ket}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
