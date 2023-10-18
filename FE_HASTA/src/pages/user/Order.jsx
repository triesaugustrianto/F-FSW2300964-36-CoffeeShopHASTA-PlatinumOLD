import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DashSquare, PlusSquare, XSquareFill } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
export const Order = () => {
  const [data, setData] = useState([]);
  const [prices, setPrices] = useState(null);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  //send
  const Submit = (data) => {
    //tampung
    let resCheck = JSON.parse(localStorage.getItem("checkout")) || [];
    //check data/ update
    const findData = resCheck.find((e) => e.IDP === data.ID);
    if (!findData) {
      //convert harga
      const prc =
        data.size === "large"
          ? parseInt(data.price) + 6000
          : parseInt(data.price);
      //send data
      const checkOut = {
        Own: 1,
        IDP: data.ID,
        Img: data.img,
        Product: data.name,
        Size: data.size,
        Ave: data.available,
        Sweet: data.sweet,
        Price: prc,
        Qty: 1,
      };
      resCheck.push(checkOut);
      //save local
      localStorage.setItem("checkout", JSON.stringify(resCheck));
    }

    //CHECK
    resCheck.map((e) => {
      if (e.Size === data.size) {
        const prc =
          data.size === "large"
            ? parseInt(data.price) + 6000
            : parseInt(data.price);
        const checkOut = {
          Own: 1,
          IDP: data.ID,
          Img: data.img,
          Product: data.name,
          Size: data.size,
          Ave: data.available,
          Sweet: data.sweet,
          Price: prc,
          Qty: 1,
        };
        resCheck.push(checkOut);
        localStorage.setItem("checkout", JSON.stringify(resCheck));
      } else {
        element.Qty += 1;
        localStorage.setItem("checkout", JSON.stringify(resCheck));
      }
    });

    // setTimeout(() => {
    //   window.location.href = "/user/order/";
    //   localStorage.setItem("nav", "3");
    // }, 800);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/products/${id}`)
      .then((res) => {
        const response = res.data.query;
        setData(response);
        setPrices(response.map((e) => parseInt(e.price)));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSize = (e) => {
    const data = e.target.value;
    if (data === "large") {
      return setPrices(parseInt(prices) + 6000);
    } else {
      setPrices(parseInt(prices) - 6000);
    }
  };

  return (
    <div className="row">
      <div className="col">
        {data &&
          data.map((e) => {
            return (
              <div key={e.id}>
                <img
                  src={e.image}
                  className=" object-fit-cover position-relative w-100"
                  alt="foto"
                  style={{ height: "250px" }}
                />
                <span
                  className="position-absolute  bg-transparent text-danger "
                  style={{ top: "5px", left: "15px", cursor: "pointer" }}
                  onClick={() => navigate(`/user/menu`)}
                >
                  <XSquareFill className="bg-transparent fw-bold text-danger" />{" "}
                  Close
                </span>
                <div className="d-flex justify-content-center">
                  <div className="card w-100">
                    <div className="card-body">
                      <form onSubmit={handleSubmit(Submit)}>
                        <input
                          type="text"
                          value={e.id}
                          {...register("ID")}
                          className="d-none"
                        />
                        <input
                          type="text"
                          value={e.image}
                          {...register("img")}
                          className="d-none"
                        />
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                          <div className="col ">
                            <input
                              type="text"
                              className="form-control-plaintext fw-bold"
                              readOnly
                              value={e.name}
                              {...register("name")}
                            />{" "}
                          </div>
                          <div className="col d-flex align-items-center  justify-content-end">
                            <label className="bg-transparent me-1">Rp</label>
                            <input
                              type="number"
                              className="form-control-plaintext fw-bold  w-50"
                              readOnly
                              value={prices}
                              {...register("price")}
                            />
                          </div>
                        </div>
                        <div className="mb-3 ">
                          <label htmlFor="cupSize">Cup Size</label>
                          <div
                            className="d-flex justify-content-start gap-5 mt-2"
                            id="cupSize"
                          >
                            <div>
                              <input
                                type="radio"
                                className="btn-check"
                                name="size"
                                id="reguler"
                                defaultChecked
                                value={"reguler"}
                                {...register("size")}
                                onChange={handleSize}
                              />
                              <label
                                className="btn btn-outline-success"
                                htmlFor="reguler"
                              >
                                Reguler
                              </label>
                            </div>
                            <div className="">
                              <input
                                type="radio"
                                className="btn-check"
                                name="size"
                                id="large"
                                value={"large"}
                                {...register("size")}
                                onChange={handleSize}
                              />
                              <label
                                className="btn btn-outline-success"
                                htmlFor="large"
                              >
                                Large
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 ">
                          <label htmlFor="sweet">Available in</label>
                          <div
                            className="d-flex justify-content-start gap-5 mt-2"
                            id="available"
                          >
                            <div>
                              <input
                                type="radio"
                                className="btn-check"
                                name="available"
                                id="cold"
                                defaultChecked
                                value={"cold"}
                                {...register("available")}
                              />
                              <label
                                className="btn btn-outline-success"
                                htmlFor="cold"
                              >
                                Cold
                              </label>
                            </div>
                            <div className="">
                              <input
                                type="radio"
                                className="btn-check"
                                name="available"
                                id="Hot"
                                value={"Hot"}
                                {...register("available")}
                              />
                              <label
                                className="btn btn-outline-success"
                                htmlFor="Hot"
                              >
                                Hot
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 ">
                          <label htmlFor="sweet">Sweetness</label>
                          <div
                            className="d-flex justify-content-start gap-5 mt-2"
                            id="sweet"
                          >
                            <div>
                              <input
                                type="radio"
                                className="btn-check"
                                name="sweet"
                                id="Normal"
                                defaultChecked
                                value={"normal"}
                                {...register("sweet")}
                              />
                              <label
                                className="btn btn-outline-success"
                                htmlFor="Normal"
                              >
                                Normal
                              </label>
                            </div>
                            <div className="">
                              <input
                                type="radio"
                                className="btn-check"
                                name="sweet"
                                id="Less"
                                value={"less"}
                                {...register("sweet")}
                              />
                              <label
                                className="btn btn-outline-success"
                                htmlFor="Less"
                              >
                                Less sweet
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* <div className="mb-3 d-flex justify-content-end align-content-center  ">
                          <button
                            className="btn"
                            type="button"
                            disabled={qty === 1}
                            onClick={handleMin}
                          >
                            <DashSquare className="text-danger" />
                          </button>{" "}
                          <input
                            type="number"
                            readOnly
                            value={qty}
                            className="fw-bold form-control-plaintext text-center"
                            style={{
                              width: "25px",
                            }}
                            {...register("qty", { valueAsNumber: true })}
                          />
                          <button
                            className="btn"
                            type="button"
                            onClick={handlePlus}
                            disabled={qty === 5}
                          >
                            <PlusSquare className="text-success" />
                          </button>
                        </div> */}
                        <button
                          type="submit"
                          className="btn btn-success w-100 my-4"
                        >
                          Checkout
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
