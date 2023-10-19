import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useSWR from "swr";
import { fetcher } from "../../../fetch";
import { Errors, FormProduct, Loading } from "../../../components";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
// modul
export const EditProduct = () => {
  //   const { id } = useParams();
  const id = parseInt(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //get data
  const { isLoading, error, data } = useSWR(
    `http://localhost:2000/api/product/${id}`,
    fetcher
  );
  if (isLoading) return <Loading />;
  if (error) return <Errors />;

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
      .put(`http://localhost:2000/api/product/${id}`, product, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Acess-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Success update product !", {
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
      {data &&
        data.map((e) => {
          return (
            <FormProduct
              key={e.id}
              title="Edit product"
              dfname={e.name}
              dfprice={e.price}
              dfcategory={e.category}
              dfdesc={e.description}
              Submits={Submits}
              dfimg={false}
            />
          );
        })}
    </div>
  );
};
