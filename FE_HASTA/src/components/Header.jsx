import { logo } from "../assets";

const Header = () => {
  return (
    <div className="container-fluid border-bottom ">
      <div className="">
        <img src={logo} alt="logo" style={{ width: "180px" }} />
      </div>
    </div>
  );
};

export default Header;
