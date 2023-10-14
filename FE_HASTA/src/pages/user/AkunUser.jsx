import React from "react";
import {
  ArrowUpRight,
  BoxArrowInRight,
  EnvelopeAt,
  Map,
  Person,
  ShieldLock,
  Telephone,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { coffe } from "../../assets";

export const AkunUser = () => {
  return (
    <div className="row ">
      <div className="container position-relative">
        <div className="h-50 ">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            className="img-fluid rounded-bottom-4"
          />
        </div>
        <div
          className="card position-absolute  start-50 translate-middle-x"
          style={{ width: "18rem", bottom: "-25px" }}
        >
          <div className="card-body text-success d-flex justify-content-between align-items-center rounded-3">
            <h5 className="card-title">Hi, hidayat</h5>
            <img
              src={coffe}
              alt="coffe"
              className="img-thumbnail rounded-circle"
              style={{ width: "50px" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 col mx-2">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <Link className="nav-link d-flex align-items-center" to={"/"}>
                <Person className="text-success" />
                <span className="medium d-block text-black fw-medium ms-2">
                  Nama
                </span>
              </Link>
              <ArrowUpRight className="text-danger-emphasis" />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <Link className="nav-link d-flex align-items-center" to={"/"}>
                <EnvelopeAt className="text-success" />
                <span className="medium d-block text-black fw-medium ms-2">
                  Email
                </span>
              </Link>

              <ArrowUpRight className="text-danger-emphasis" />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <Link className="nav-link d-flex align-items-center" to={"/"}>
                <Telephone className="text-success" />
                <span className="medium d-block text-black fw-medium ms-2">
                  Phone
                </span>
              </Link>

              <ArrowUpRight className="text-danger-emphasis" />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <Link className="nav-link d-flex align-items-center" to={"/"}>
                <Map className="text-success" />
                <span className="medium d-block text-black fw-medium ms-2">
                  Address
                </span>
              </Link>

              <ArrowUpRight className="text-danger-emphasis" />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <Link className="nav-link d-flex align-items-center" to={"/"}>
                <ShieldLock className="text-success" />
                <span className="medium d-block text-black fw-medium ms-2">
                  Password
                </span>
              </Link>

              <ArrowUpRight className="text-danger-emphasis" />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <Link className="nav-link d-flex align-items-center" to={"/"}>
                <ShieldLock className="text-success" />
                <span className="medium d-block text-black fw-medium ms-2">
                  Sign out
                </span>
              </Link>

              <BoxArrowInRight className="text-danger  pe-auto" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
