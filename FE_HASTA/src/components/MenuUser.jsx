import React, { useEffect, useState } from "react";
import {
  Clipboard,
  ClipboardFill,
  Cup,
  CupFill,
  HouseDoor,
  HouseDoorFill,
  Person,
  PersonFill,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { Modals } from "./Modals";

export const MenuUser = () => {
  const storedValueAsNumber = Number(localStorage.getItem("nav"));
  const [active, setActive] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 1
  );

  //active
  useEffect(() => {
    localStorage.setItem("nav", String(active));
  }, [active]);
  return (
    <div className="fixed-bottom w-100">
      <nav className="navbar  navbar-expand " style={{ height: "50px" }}>
        <ul className="navbar-nav nav-justified w-100 border-top ">
          <li className="nav-item">
            <NavLink
              className="nav-link text-center"
              to={"/user"}
              onClick={() => setActive(1)}
            >
              {active === 1 ? (
                <HouseDoorFill style={{ color: "#006a68" }} />
              ) : (
                <HouseDoor className="text-black" />
              )}
              <span
                className={
                  active === 1
                    ? "small d-block text-secondary fw-bold"
                    : "small d-block text-black fw-medium"
                }
              >
                Home
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-center "
              to={"/user/menu"}
              onClick={() => setActive(2)}
            >
              {active === 2 ? (
                <CupFill style={{ color: "#006a68" }} />
              ) : (
                <Cup />
              )}
              <span
                className={
                  active === 2
                    ? "small d-block text-secondary fw-bold"
                    : "small d-block text-black fw-medium"
                }
              >
                Menu
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-center"
              to={"/user/order/"}
              onClick={() => setActive(3)}
            >
              {active === 3 ? (
                <ClipboardFill style={{ color: "#006a68" }} />
              ) : (
                <Clipboard className="text-black" />
              )}
              <span
                className={
                  active === 3
                    ? "small d-block text-secondary fw-bold"
                    : "small d-block text-black fw-medium"
                }
              >
                Pesanan
              </span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-center"
              to={"/user/akun"}
              onClick={() => setActive(4)}
            >
              {active === 4 ? (
                <PersonFill style={{ color: "#006a68" }} />
              ) : (
                <Person className="text-black" />
              )}
              <span
                className={
                  active === 4
                    ? "small d-block text-secondary fw-bold"
                    : "small d-block text-black fw-medium"
                }
              >
                Akun
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
