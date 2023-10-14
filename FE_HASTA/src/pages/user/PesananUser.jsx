import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const PesananUser = () => {
  return (
    <div className="container">
      <ul className="nav nav-underline justify-content-around mt-3">
        <li className="nav-item">
          <NavLink
            className="nav-link "
            aria-current="page"
            to={"/user/order/"}
          >
            Checkout
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link "
            aria-current="page"
            to={"/user/order/pesanan"}
          >
            Pesanan
          </NavLink>
        </li>
      </ul>
      <hr className="border-3 text-success" />
      <Outlet />
    </div>
  );
};
