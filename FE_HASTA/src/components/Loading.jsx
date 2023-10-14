import React from "react";
import { loading } from "../assets";

export const Loading = () => {
  return (
    <div className="container-fluid min-vh-100  position-relative">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <img src={loading} alt="loading" style={{ width: "150px" }} />
            <h5 className="text-center placeholder-glow">Loading ...</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
