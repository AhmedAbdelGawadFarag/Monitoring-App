const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/User");
// const config = require("./config/config");

app.use(express.json());
app.use("/users", userRoute);

app.listen(process.env.port, () => {
  console.log("Server is Running on port " + process.env.port);
});

let db_url = "mongodb://" + process.env.db_host + "/" + process.env.db_name;

console.log("db url is " + db_url);

const connect = async () => {
  const db = await mongoose.connect(db_url, {
    serverSelectionTimeoutMS: 1 * 60 * 1000 , //  try to reconnect for 1 minutes then timeout
  });
};

connect();
