const { request, response } = require("express");
require("dotenv").config();
const argon2 = require("argon2");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const db = require("../db/db");

//create users
const createUsers = async (req = request, res = response) => {
  try {
    const { name, phone, email, address, password } = await req.body;
    //hash password
    const hashPassword = await argon2.hash(password);
    //email transporter
    const transporter = nodemailer.createTransport(
      smtpTransport({
        host: "mail.citrapersada.net",
        secureConnection: false,
        tls: {
          rejectUnauthorized: false,
        },
        port: 465,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      })
    );
    //id user
    const id = uuidv4();
    //check email
    const findData = await db("users").select("email").where("email", email);
    if (findData.length) {
      return res.status(400).json({
        success: false,
        message: "user already exist !!",
      });
    } else {
      //create data
      const createUser = await db("users")
        .insert({
          id: id,
          name: name,
          phone: phone,
          email: email,
          address: address,
          password: hashPassword,
          role: "users",
        })
        .returning(["name", "phone", "email", "address"]);
      transporter.sendMail({
        from: process.env.USER,
        to: email,
        subject: "Confirmation Account",
        html: `
               <p>Welcome : ${email}</p>
               <p>You can confirm your account email through the link below: <span><a href="http://app-citrapersada.net:2000/api/users/confirm/${id}" target=_blank>http://app-citrapersada.net:2000/api/users</a></span></p>
                </hr>
                ©${new Date().getFullYear()}IT_Citra-Persada-Infrastruktur
      `,
      });
      res.status(201).json({
        status: true,
        message: "registratsi user success",
        query: createUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
//confirmasi users
const confirmUsers = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const updateData = await db("users").where("id", id).update({
      isConfirm: true,
    });
    res.status(201).json({
      status: true,
      message: "confirm users success",
      query: updateData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
//reset password user
const resetPassword = async (req = request, res = response) => {
  try {
    const { email } = await req.body;
    const transporter = nodemailer.createTransport(
      smtpTransport({
        host: "mail.citrapersada.net",
        secureConnection: false,
        tls: {
          rejectUnauthorized: false,
        },
        port: 465,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      })
    );
    //find data
    const findUsers = await db("users")
      .select("*")
      .where("email", email)
      .first();

    if (!findUsers) {
      return res.status(400).json({
        succes: false,
        message: "email tidak terdaftar",
      });
    } else {
      transporter.sendMail({
        from: process.env.USER,
        to: email,
        subject: "Reset Password",
        html: `
        <p>Link reset password : <a href="http://ess.citrapersada.net/ess/update-password/${
          findUsers.id
        }" target=_blank>http://ess.citrapersada.net/ess/forgot</a></p>
        </br>
        </hr>
        ©${new Date().getFullYear()}IT_Citra-Persada-Infrastruktur
        `,
      }),
        res.status(201).json({
          succes: true,
          message: "reset password sukses",
          query: findUsers,
        });
    }
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
//update password user
const updatePassword = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const { password } = await req.body;
    const hashPassword = await argon2.hash(password);
    const updateData = await db("users").where("id", id).update({
      password: hashPassword,
    });
    res.status(201).json({
      status: true,
      message: "password success updated",
      query: updateData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
//get detail user
const getDetailUser = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const getData = await db("users").select("*").where("id", id);
    res.status(200).json({
      status: true,
      message: "data is displayed successfully",
      query: getData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
//get all users
const getAllUsers = async (req = request, res = response) => {
  try {
    const getData = await db("users")
      .select("*")
      .where("isConfirm", true)
      .orderBy("name", "asc");
    res.status(200).json({
      status: true,
      message: "data is displayed successfully",
      query: getData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

const testingQuery = async (req = request, res = response) => {
  try {
    const { categories } = await req.query;

    //find category
    const productCategory = await db("products").select("*");
    const category = productCategory.map((e) => e.category);
    const resultProduct = [...new Set(category)];

    //find data
    const resultData =
      categories === "all"
        ? await db("products").whereIn("category", resultProduct)
        : await db("products").where("category", categories);

    res.status(200).json({
      succes: true,
      query: resultData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
module.exports = {
  createUsers,
  confirmUsers,
  resetPassword,
  updatePassword,
  getDetailUser,
  getAllUsers,
  testingQuery,
};
