import axios from "axios";
import { useState } from "react";
import { ExclamationCircle, Eye, EyeSlash } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //send data
  const Submit = (data) => {
    axios
      .post(`http://localhost:2000/api/users-login`, data)
      .then((res) => {
        if (res.status === 201) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem(
            "ROLE",
            JSON.stringify(res.data.query["role"])
          );

          sessionStorage.setItem("nav", 1);

          toast.success("Login Sukses !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });

          if (JSON.parse(sessionStorage.getItem("ROLE")) === "user") {
            return setTimeout(() => {
              window.location.href = "/user";
            }, 1800);
          } else {
            setTimeout(() => {
              window.location.href = "/dsb";
            }, 1800);
          }
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.warning(" password salah!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        if (err.response.status === 404) {
          toast.warning(" user  tidak terdaftar!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        if (err.response.status === 403) {
          toast.warning(" user belum konfirmasi akun!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        if (err.response.status === 500) {
          toast.error("Error Notification !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };
  return (
    <div className="container-fluid m-5">
      <ToastContainer />
      <div className="container">
        <div className="card px-5 py-5">
          <form onSubmit={handleSubmit(Submit)}>
            {/* Email input */}
            <div className="form-outline mb-4">
              <label className="form-label p5" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <div className="text-danger mt-2" style={{ fontSize: "14px" }}>
                  <ExclamationCircle /> field required
                </div>
              )}
            </div>
            {/* Password input */}
            <div className="col-12">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group flex-nowrap">
                <input
                  type={show ? "text" : "password"}
                  className="form-control"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  className="input-group-text "
                  onClick={() => setShow(!show)}
                >
                  {show ? <Eye /> : <EyeSlash />}
                </button>
              </div>
              {errors.password && (
                <div className="text-danger mt-2" style={{ fontSize: "14px" }}>
                  <ExclamationCircle /> field required
                </div>
              )}
            </div>
            <div className="text-center d-flex justify-content-end mt-2">
              {/* Simple link */}
              <Link to={"/forgot"} className="text-decoration-none">
                Forgot password?
              </Link>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 w-100  mt-4"
            >
              Sign in
            </button>

            {/* Register buttons */}
            <div className="text-center d-flex justify-content-end">
              <Link to={"/signup"} className="text-decoration-none">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
