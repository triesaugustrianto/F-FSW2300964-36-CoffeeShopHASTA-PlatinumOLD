import React from "react";
import { error } from "../assets";

export const Errors = () => {
  return (
    <div className="container-fluid min-vh-100  position-relative">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <img src={error} alt="loading" style={{ width: "150px" }} />
            <p className="text-center placeholder-glow">
              Internal server error...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
