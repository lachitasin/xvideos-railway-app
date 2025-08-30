const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to eserver application." });
});
require("./api/routes/user.routes")(app);

// set port, listen for requests
app.listen(3456, () => {
  console.log("Server is running on port 3456.");
});
