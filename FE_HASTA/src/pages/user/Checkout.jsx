import React from "react";
import { coffeTime } from "../../assets";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  const handlePesan = () => {
    navigate("/user/menu");
    // localStorage.setItem("nav", String(2));
  };
  return (
    <div className="container">
      <div className="container-fluid min-vh-100  position-relative">
        <div className="position-absolute top-50 start-50 translate-middle bg-secondary ">
          <div className="container">
            <div className="d-flex flex-column align-items-center">
              <p className="">Opps keranjang kamu kosong nih...</p>
              <img src={coffeTime} alt="loading" style={{ width: "150px" }} />
              <button className="btn btn-success mt-4" onClick={handlePesan}>
                Pesan Coffe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
