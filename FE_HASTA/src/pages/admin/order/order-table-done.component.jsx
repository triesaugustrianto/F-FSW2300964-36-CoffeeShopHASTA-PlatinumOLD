import React from "react";
// import OrderNavbar from "./order-navbar.component";

function OrderDone() {
  return (
    <div className="container m-5">
      {/* <OrderNavbar /> */}
      <div className="row">
        <div className="col">
          <table className="table table-bordered table-striped bg-transparent">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Size</th>
                <th scope="col">Sugar</th>
                <th scope="col">Cold/Hot</th>
                <th scope="col">Topping</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>Kopi Saset</td>
                <td>2</td>
                <td>Large</td>
                <td>Less Sugar</td>
                <td>Cold</td>
                <td>Boba</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDone;
