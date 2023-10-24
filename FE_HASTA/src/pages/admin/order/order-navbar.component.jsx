import React from "react";
import { Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const menuData = [
  {
    label: "All Order",
    key: "sub1",
    route: "/dsb/order/",
  },
  {
    label: "Checked Order",
    key: "sub2",
    route: "/dsb/order/checked",
  },
  {
    label: "Order Done",
    key: "sub3",
    route: "/dsb/order/done",
  },
];

const OrderNavbar = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: "transparent",
          marginLeft: "50px",
        }}
      >
        <Menu
          onClick={({ key }) =>
            handleClick(menuData.find((item) => item.key === key)?.route)
          }
          style={{
            width: "100%",
          }}
          mode="horizontal"
          defaultSelectedKeys={["sub1"]}
          defaultOpenKeys={["sub1"]}
        >
          {menuData.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default OrderNavbar;
