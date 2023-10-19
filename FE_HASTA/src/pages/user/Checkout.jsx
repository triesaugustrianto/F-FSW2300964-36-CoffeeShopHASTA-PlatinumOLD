import React, { useEffect } from "react";
import { coffeTime } from "../../assets";
import { format } from "../../fetch/format";

export const Checkout = () => {
  let data = JSON.parse(localStorage.getItem("checkout")) || [];
  const totalPrice = data.map((e) => e.Price);
  const handlePesan = () => {
    window.location.href = "/user/menu";
    localStorage.setItem("nav", "2");
  };
  const handleDelete = (id) => {
    const indexToDelete = data.findIndex((obj) => obj.IDP === id);
    if (indexToDelete !== -1) {
      data.splice(indexToDelete, 1);
      // Update the array in localStorage
      localStorage.setItem("checkout", JSON.stringify(data));
    }
    window.location.href = "/user/order/";
  };

  return (
    <div className="container">
      {data.length ? (
        <div className="container-fluid min-vh-100  position-relative">
          <div className="card">
            <div className="card-body g-2 ">
              {data &&
                data.map((e, idx) => {
                  return (
                    <div
                      className="border-bottom border-success py-2"
                      style={{ maxWidth: "540px" }}
                      key={idx}
                    >
                      <div className=" d-flex">
                        <div className="col">
                          <img
                            src={e.Img}
                            className="img-fluid  rounded-3 object-fit-cover"
                            alt="image"
                            style={{
                              height: "150px",
                              width: "100px",
                            }}
                          />
                        </div>
                        <div className="col">
                          <h5 className="card-title text-capitalize">
                            {e.Product}
                          </h5>
                          <div className="card-text text-lowercase">
                            {e.Size} - {e.Sweet}
                          </div>
                          <div className="card-text text-lowercase">
                            * {e.Qty}
                          </div>
                          <p className="card-text fw-bold text-secondary">
                            Rp {e.Price}
                          </p>
                          <button
                            className="btn btn-outline-danger fs-6"
                            onClick={() => handleDelete(e.IDP)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body text-capitalize">
              total pesanan <span className="fw-bold text-success">Rp {0}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="position-absolute top-50 start-50 translate-middle bg-secondary ">
          <div className="container">
            <div className="d-flex flex-column align-items-center">
              <p className="">Opps belum ada pesanan...</p>
              <img src={coffeTime} alt="loading" style={{ width: "150px" }} />
              <button className="btn btn-success mt-4" onClick={handlePesan}>
                Mulai pesan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
