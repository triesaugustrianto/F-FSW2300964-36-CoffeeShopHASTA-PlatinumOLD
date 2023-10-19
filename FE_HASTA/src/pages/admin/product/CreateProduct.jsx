import axios from "axios";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import { FormProduct } from "../../../components";

//modul
export const CreateProduct = () => {
  const Submits = (data) => {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("image", data.image[0]);
    let product = {};
    formData.forEach(function (value, key) {
      product[key] = value;
    });
    axios
      .post(`http://localhost:2000/api/product`, product, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Acess-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Success create product !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1200,
          });
          setTimeout(() => {
            window.location.href = "/dsb/product";
          }, 1500);
        }
      })
      .catch((err) => {
        if (err.response.status === 500) {
          toast.error("Error Notification !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };
  return (
    <div className="container-fluid">
      <ToastContainer />
      <div className="container my-5">
        <FormProduct Submits={Submits} />
      </div>
    </div>
  );
};
