import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Catalog from "../../components/Catalog";
import { useContext } from "react";
import { ProductConsum } from "../../context/GlobalContext";

export default function Menu() {
  const [product] = useContext(ProductConsum);

  return (
    <>
      <div className="App">
        <div className="navbar">
          <Header />
        </div>
        <div className="menu-content">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="catalog">
            <div className="menu">
              {product &&
                product.map((e) => {
                  return (
                    <Catalog
                      key={e.id}
                      name={e.name}
                      desc={e.description}
                      price={e.price}
                      img={e.image}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
