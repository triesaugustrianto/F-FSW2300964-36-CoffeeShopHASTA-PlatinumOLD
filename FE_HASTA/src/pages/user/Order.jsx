import React from "react";
import useSWR from "swr";
import { fetcher } from "../../fetch";
import { Errors, Loading } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { XSquareFill } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
export const Order = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(
    `http://localhost:2000/api/products/${id}`,
    fetcher
  );

  if (isLoading) return <Loading />;
  if (error) return <Errors />;

  //send
  const Submit = (data) => {
    console.log(data);
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
                  onClick={() => navigate(-1)}
                >
                  <XSquareFill className="bg-transparent fw-bold text-danger" />{" "}
                  Close
                </span>
                <div className="d-flex justify-content-center">
                  <div className="card w-100">
                    <div className="card-body">
                      <form onSubmit={handleSubmit(Submit)}>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control-plaintext fw-bold"
                            readOnly
                            value={e.name}
                            {...register("name")}
                          />
                        </div>

                        <button type="submit" className="btn btn-success w-100">
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
