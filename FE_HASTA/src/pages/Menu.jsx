import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Catalog from "../components/Catalog";

export default function Menu() {
  return (
    <>
      <div className="App">
        <div className="navbar">
          <NavBar />
          <Header />
        </div>
        <div className="menu-content">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="catalog">
            <Catalog />
          </div>
        </div>
      </div>
    </>
  );
}
