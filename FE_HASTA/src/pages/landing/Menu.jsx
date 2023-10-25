import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Catalog from "../../components/Catalog";
import { useContext } from "react";
import { ProductConsum } from "../../context/GlobalContext";

export default function Menu() {
  const [product] = useContext(ProductConsum);

  return (
    <div>
      <div className="App">
        <div className="menu-content">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="catalog">
            <div className="menu-title" id="coffe">
              <span>Coffe</span>
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
            <div className="menu-title" id="tea">
              <span>Tea</span>
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
            <div className="menu-title" id="blended">
              <span>Blended</span>
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
            <div className="menu-title" id="others">
              <span>Others</span>
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
      </div>
    </div>
  );
}
