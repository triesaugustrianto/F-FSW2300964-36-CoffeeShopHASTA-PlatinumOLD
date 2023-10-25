import React from "react";
// import { Button } from "react-bootstrap";
import useSWR from "swr";
import { fetcher } from "../../../fetch";

function OrderDone() {
  const { data } = useSWR(`http://localhost:2000/api/checkout`, fetcher);

  return (
    <div className="container m-5">
      <h4 className="mb-4">Orderan selesai</h4>
      <div className="row">
        <div className="col">
          <table
            id="order-table"
            className="table table-bordered table-striped bg-transparent"
          >
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Size</th>
                <th scope="col">Sugar</th>
                <th scope="col">Cold/Hot</th>
                <th scope="col">Topping</th>
                <th scope="col">Action</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((data, index) => (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.owner}</td>
                    <td>{data.product}</td>
                    <td>{data.qty}</td>
                    <td>{data.size}</td>
                    <td>{data.sweet}</td>
                    <td>{data.available}</td>
                    <td>{data.toping}</td>
                    <td></td>
                    <td>
                      <input type="checkbox" name="select" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDone;
