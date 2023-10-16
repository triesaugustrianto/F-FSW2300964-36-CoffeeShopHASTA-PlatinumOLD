import React from "react";
import addtocart from "../assets/icon/Add to Cart.png";
export const CardProduct = ({
  width = "12rem",
  height = "17rem",
  img,
  title,
  cat,
  click,
  price,
}) => {
  return (
    <div
      className="card shadow mb-3"
      style={{
        width: width,
        height: height,
      }}
    >
      <img
        src={img}
        className="card-img-top object-fit-cover h-50 position-relative rounded-bottom-4"
        alt="product"
        loading="lazy"
      />
      <span
        className="position-absolute px-3 round bg-success text-white fw-medium shadow"
        style={{ borderTopLeftRadius: "6px" }}
      >
        New
      </span>

      <div className="card-body rounded-bottom-2 border-bottom">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-secondary bg-success-subtle rounded-1 text-center text-success">
          {cat}
        </p>
        <div className="d-flex justify-content-between  align-items-center ">
          <h5>
            Rp : <span>{price}</span>
          </h5>
          <button className="btn" onClick={click}>
            <img src={addtocart} className="w-75" />
          </button>
        </div>
      </div>
    </div>
  );
};
