import React from "react";
import { Space, Table } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "ID",
    dataIndex: "key",
    key: "id",
  },
  {
    title: "Customer",
    dataIndex: "name",
    key: "customer",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Quantity",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "Size",
    key: "size",
    dataIndex: "size",
  },
  {
    title: "Sugar",
    key: "sugar",
    dataIndex: "sugar",
  },
  {
    title: "Toping",
    key: "toping",
    dataIndex: "toping",
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => (
      <Space size="middle">
        <a>
          Accept <CheckOutlined />
        </a>
        <a>
          Cancel <CloseOutlined />
        </a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const OrderTable = () => <Table columns={columns} dataSource={data} />;
export default OrderTable;
