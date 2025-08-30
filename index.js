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

// load user routes
require("./api/routes/user.routes")(app);

// set port (Railway provides PORT env variable)
const PORT = process.env.PORT || 3456;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
