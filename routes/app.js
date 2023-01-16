const express = require("express");
const verifyToken = require("../middleware/auth");
const userModel = require("../model/user");
const produitModel = require("../model/product");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const routes = express.Router();

routes.post("/register", (req, res) => {
  const { email, firstname, lastname, password } = req.body;

  if (!email || !firstname || !lastname || !password)
    return res.status(404).json({ message: "Donnees user manquant" });

  bcrypt.genSalt(10, (err, salt) => {
    if (!err) {
      bcrypt.hash(password, salt, (err, hash) => {
        if (!err) {
          const user = userModel({ ...req.body, password: hash });
          user.save((err, user) => {
            if(err)
                return res.status(500).json({ message: "Error sauvegarde user" });
            else 
                return res.status(200).json({ message: "user created" });
          });
        }else {
            return res.status(500).json({ message: "Error generation hash" });
        }
      });
    }else {
        return res.status(500).json({ message: "Error generation salt" });
    }
  });
});

routes.post("/login", (req, res) => {});

routes.get("/products", verifyToken, (req, res) => {});

routes.get("/product/:name", verifyToken, (req, res) => {});

routes.post("/product", verifyToken, (req, res) => {});

routes.put("/product/:name", verifyToken, (req, res) => {});

routes.delete("/product/:name", verifyToken, (req, res) => {});

module.exports = routes;
