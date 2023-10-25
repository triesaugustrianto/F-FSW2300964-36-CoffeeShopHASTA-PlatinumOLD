import { not } from "../../assets";

function NotFound() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-evenly align-items-center">
      <img src={not} alt="foto" className="w-50 " />
      <h2 className="mt-5 fw-semibold">Page Not Found</h2>
    </div>
  );
}

export default NotFound;
