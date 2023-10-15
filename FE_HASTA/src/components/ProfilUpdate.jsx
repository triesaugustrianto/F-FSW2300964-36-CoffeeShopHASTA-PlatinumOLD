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
export const ProfilUpdate = ({ name, email, addres, phone }) => {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="nav-link d-flex align-items-center">
            <Person className="text-success" />
            <span className="medium d-block text-black fw-medium ms-2">
              Nama : <span>{name}</span>
            </span>
          </Link>
          <a className="btn" data-bs-toggle="modal" data-bs-target="#name">
            <ArrowUpRight className="text-danger-emphasis " />
          </a>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="nav-link d-flex align-items-center">
            <EnvelopeAt className="text-success" />
            <span className="medium d-block text-black fw-medium ms-2">
              Email : <span>{email}</span>
            </span>
          </Link>
          <a className="btn" data-bs-toggle="modal" data-bs-target="#email">
            <ArrowUpRight className="text-danger-emphasis " />
          </a>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="nav-link d-flex align-items-center">
            <Telephone className="text-success" />
            <span className="medium d-block text-black fw-medium ms-2">
              Phone : <span>{phone}</span>
            </span>
          </Link>
          <a className="btn" data-bs-toggle="modal" data-bs-target="#phone">
            <ArrowUpRight className="text-danger-emphasis " />
          </a>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="nav-link d-flex align-items-center">
            <Map className="text-success" />
            <span className="medium d-block text-black fw-medium ms-2">
              Address : <span>{addres}</span>
            </span>
          </Link>

          <a className="btn" data-bs-toggle="modal" data-bs-target="#address">
            <ArrowUpRight className="text-danger-emphasis " />
          </a>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="nav-link d-flex align-items-center">
            <ShieldLock className="text-success" />
            <span className="medium d-block text-black fw-medium ms-2">
              Password
            </span>
          </Link>
          <a className="btn" data-bs-toggle="modal" data-bs-target="#password">
            <ArrowUpRight className="text-danger-emphasis " />
          </a>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <Link className="nav-link d-flex align-items-center">
            <ShieldLock className="text-success" />
            <span className="medium d-block text-black fw-medium ms-2">
              Sign out
            </span>
          </Link>
          <a className="btn">
            <BoxArrowInRight className="text-danger  pe-auto" />
          </a>
        </li>
      </ul>
    </div>
  );
};
