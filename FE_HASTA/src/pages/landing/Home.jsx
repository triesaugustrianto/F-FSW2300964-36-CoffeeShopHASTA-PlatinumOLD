import { Outlet } from "react-router";
import { NavBar } from "../../components";

function Home() {
  return (
    <div className="container-fluid">
      <div className="container">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
