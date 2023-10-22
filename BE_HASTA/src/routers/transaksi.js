const express = require("express");
const {
  createTransaksi,
  getTransaksiAll,
  confirmTransaksi,
  doneTransaksi,
  getDailyTransaksi,
  getDetailTransaksi,
} = require("../controllers/transaksi");
const routeTransaksi = express.Router();
routeTransaksi.post("/api/transaksi", createTransaksi);
routeTransaksi.get("/api/transaksi", getTransaksiAll);
routeTransaksi.get("/api/transaksi-daily", getDailyTransaksi);
routeTransaksi.get("/api/transaksi/:id", getDetailTransaksi);
routeTransaksi.put("/api/transaksi-confirm/:id", confirmTransaksi);
routeTransaksi.put("/api/transaksi-done/:id", doneTransaksi);

module.exports = routeTransaksi;
