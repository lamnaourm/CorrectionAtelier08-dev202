const express = require("express");
const verifyToken = require('../middleware/auth')
const routes = express.Router();

routes.post("/register", (req, res) => {});

routes.post("/login", (req, res) => {});

routes.get("/products",verifyToken, (req, res) => {});

routes.get("/product/:name",verifyToken, (req, res) => {});

routes.post("/product",verifyToken, (req, res) => {});

routes.put("/product/:name",verifyToken, (req, res) => {});

routes.delete("/product/:name",verifyToken, (req, res) => {});

module.exports = routes;
