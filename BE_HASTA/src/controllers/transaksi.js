const { request, response } = require("express");
const db = require("../db/db");
const moment = require("moment/moment");

//create
const createTransaksi = async (req = request, res = response) => {
  try {
    const { transaksi, totals, uang, user_id } = await req.body;

    const Transactiions = await db.transaction((trx) => {
      return trx("transaction")
        .insert({
          totals: parseInt(totals),
          uang: parseInt(uang),
          kembalian: parseInt(uang) - parseInt(totals),
          owner: user_id,
        })
        .returning("id")
        .then((id) => {
          const items = transaksi.map((item) => ({
            ...item,
            id_transaksi: id[0].id,
          }));
          return trx("items")
            .insert(items)
            .returning(["name", "qty", "keterangan"]);
        });
    });
    const update = await db("checkout")
      .where("owner", user_id)
      .update("isPay", true);

    res.status(201).json({
      status: true,
      message: "data success",
      query: Transactiions,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//getAll
const getTransaksiAll = async (req = request, res = response) => {
  try {
    const getTransaksi = await db("transaction")
      .where("isConfirm", false)
      .andWhere("isDone", false)
      .orderBy("createdAt", "desc");
    res.status(200).json({
      status: true,
      message: "data success",
      query: getTransaksi,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//confrim transaksi
const confirmTransaksi = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const updateData = await db("transaction")
      .where("id", id)
      .update({
        isConfirm: true,
      })
      .returning([
        "id",
        "owner",
        "totals",
        "uang",
        "kembalian",
        "isConfirm",
        "isDone",
      ]);
    res.status(201).json({
      status: true,
      message: "data success updated",
      query: updateData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//transaksi order done
const doneTransaksi = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const { checked } = await req.body;
    const updateData = await db("transaction")
      .where("id", id)
      .update({
        isDone: true,
        checked: checked,
      })
      .returning([
        "id",
        "owner",
        "totals",
        "uang",
        "kembalian",
        "isConfirm",
        "isDone",
        "checked",
      ]);
    res.status(201).json({
      status: true,
      message: "data success updated",
      query: updateData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//get all done transaksi / day
const getDailyTransaksi = async (req = request, res = response) => {
  try {
    const { day } = await req.query;
    const start = moment(day).startOf("days");
    const end = moment(day).endOf("days");

    const getData = await db("transaction")
      .andWhere("isConfirm", true)
      .andWhere("isDone", true)
      .andWhere("createdAt", ">", new Date(start))
      .andWhere("createdAt", "<", new Date(end));
    res.status(200).json({
      status: true,
      message: "data succes",
      query: getData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//getDetail order
const getDetailTransaksi = async (req = request, res = response) => {
  try {
    const { id } = await req.params;

    const Transactiions = await db.transaction((trx) => {
      return trx("transaction")
        .select("*")
        .where("id", id)
        .then((data) => {
          return trx("items")
            .where("id_transaksi", data[0].id)
            .then((result) => {
              const struk = data.map((item) => ({
                ...item,
                transaksi: result,
              }));
              return struk;
            });
        });
    });
    res.status(200).json({
      status: true,
      message: "data success",
      query: Transactiions,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

//get order by user
const getOrderUser = async (req = request, res = response) => {
  try {
    const { user_id } = await req.body;
    const { day } = await req.query;
    const start = moment(day).startOf("months");
    const end = moment(day).endOf("months");
    const Transactiions = await db.transaction((trx) => {
      return trx("transaction")
        .select("*")
        .orderBy("createdAt", "desc")
        .where("owner", user_id)
        .andWhere("createdAt", ">", new Date(start))
        .andWhere("createdAt", "<", new Date(end))
        .then((data) => {
          if (data.length) {
            return trx("items")
              .where("id_transaksi", data[0].id)
              .then((result) => {
                const struk = data.map((item) => ({
                  ...item,
                  transaksi: result,
                }));
                return struk;
              });
          }
        });
    });
    res.status(200).json({
      status: true,
      message: "data succsess",
      query: Transactiions,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
module.exports = {
  createTransaksi,
  getTransaksiAll,
  confirmTransaksi,
  doneTransaksi,
  getDailyTransaksi,
  getDetailTransaksi,
  getOrderUser,
};
