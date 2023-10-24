import axios from "axios";
const token = sessionStorage.getItem("token");
export const fetcher = (url) => axios.get(url).then((res) => res.data.query);

export const fetchToken = (url) =>
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        "Acess-Control-Allow-Origin": "*",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.query);
