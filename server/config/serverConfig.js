const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      origin: ["http://localhost:5173", "http://127.0.0.1:5500"],
      optionsSuccessStatus: 200,
      credentials: true
    })
  );

  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cookieParser());
  app.use(express.static("public"));
};

module.exports = serverConfig;
