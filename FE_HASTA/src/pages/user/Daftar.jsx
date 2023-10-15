import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CardProduct, Errors, Loading, Modals } from "../../components";
import useSWR from "swr";
import { fetcher } from "../../fetch";

//modul
export const Daftar = () => {
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();
  const { data, isLoading, error } = useSWR(
    `http://localhost:2000/api/product?categories=${category}`,
    fetcher
  );

  if (isLoading) return <Loading />;
  if (error) return <Errors />;

  return (
    <div className="min-vh-100">
      <div className="container ">
        <ul className="nav justify-content-center ">
          <li className="nav-item">
            <NavLink
              className={
                category === "all"
                  ? "nav-link text-success fw-bold"
                  : "nav-link "
              }
              aria-current="page"
              onClick={() => setCategory("all")}
            >
              All
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={
                category === "coffe"
                  ? "nav-link text-success fw-bold"
                  : "nav-link "
              }
              aria-current="page"
              onClick={() => setCategory("coffe")}
            >
              Coffe
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={
                category === "tea"
                  ? "nav-link text-success fw-bold"
                  : "nav-link "
              }
              aria-current="page"
              onClick={() => setCategory("tea")}
            >
              Tea
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={
                category === "bleand"
                  ? "nav-link text-success fw-bold"
                  : "nav-link "
              }
              aria-current="page"
              onClick={() => setCategory("bleand")}
            >
              Blend
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={
                category === "other"
                  ? "nav-link text-success fw-bold"
                  : "nav-link "
              }
              aria-current="page"
              onClick={() => setCategory("other")}
            >
              Other
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="border-3 border-success shadow" />
      <div className="container d-flex justify-content-between mt-4 flex-wrap gap-3">
        {data &&
          data.map((e) => {
            return (
              <CardProduct
                key={e.id}
                img={e.image}
                title={e.name}
                cat={e.category}
                price={e.price}
                click={() => navigate(`/user/menu/co/${e.id}`)}
              />
            );
          })}
      </div>
    </div>
  );
};
