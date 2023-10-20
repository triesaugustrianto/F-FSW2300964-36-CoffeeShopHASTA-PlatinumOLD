import React from "react";
import useSWR from "swr";
import { fetcher } from "../../../fetch";


export const UserDsb = () => {
  const {data} = useSWR(
  `http://localhost:2000/api/users/`,
  fetcher
);

  return (
    <div className="container m-5">
      Admin User List <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr>
                <td key={data.id}>{data.id}</td>
                <td key={data.name}>{data.name}</td>
                <td key={data.email}>{data.email}</td>
                <td key={data.password}>{data.password}</td>
                <td key={data.phone}>{data.phone}</td>
                <td key={data.addres}>{data.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};
