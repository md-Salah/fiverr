const express = require("express");
const app = express();
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");

app.use(express.json()); //mandatory for post request
app.use("/api/v1", productRoute); //mandatory for router section
app.use(errorMiddleware); //middleware for error handler

module.exports = app;