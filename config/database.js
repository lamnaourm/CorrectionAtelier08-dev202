const mongoose = require("mongoose");

function connect_db() {
  const url = process.env.URL_MONGOOSE;

  mongoose
    .connect(url)
    .then(() => {
      console.log("Connexion mongodb reussie");
    })
    .catch((error) => {
      console.log("erreur de connexion a la BD : ", error);
    });
}

module.exports = connect_db;
