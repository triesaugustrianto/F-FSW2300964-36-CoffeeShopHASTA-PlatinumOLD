import React from "react";
import { MenuUser } from "../../components";
import { Outlet } from "react-router-dom";

export const Users = () => {
  return (
    <div
      className="min-vh-100 overflow-x-hidden"
      style={{ marginBottom: "110px" }}
    >
      <div>
        <MenuUser />
      </div>
      <Outlet />
    </div>
  );
};
