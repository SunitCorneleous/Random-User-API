const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const userRoute = require("./routes/v1/user.route.js");

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send(`<h1>server is running at port ${PORT}</h1>`);
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
