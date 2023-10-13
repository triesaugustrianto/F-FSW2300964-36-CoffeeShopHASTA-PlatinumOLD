// import { Container, Nav } from "react-bootstrap";

const SideBar = () => {
  return (
    <div className="sidebar-content">
      <ul className="item">
        <li className="item-title">
          <a href="#coffe">
            <span className="description">Coffe</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 1</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 2</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 3</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 4</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 5</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 6</span>
          </a>
        </li>
      </ul>
      <ul className="item">
        <li className="item-title">
          <a href="#tea">
            <span className="description">Tea</span>
          </a>
        </li>

        <li className="list-item">
          <a href="#">
            <span className="description">Menu 1</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 2</span>
          </a>
        </li>
      </ul>
      <ul className="item">
        <li className="item-title">
          <a href="#blended">
            <span className="description">Blended</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 1</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 2</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 3</span>
          </a>
        </li>
      </ul>
      <ul className="item">
        <li className="item-title">
          <a href="#others">
            <span className="description">Others</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 1</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 2</span>
          </a>
        </li>
        <li className="list-item">
          <a href="#">
            <span className="description">Menu 3</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
