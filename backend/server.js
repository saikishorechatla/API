const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");



//app

const app = express();
app.use(express.json());
app.use(cors());



// Load environment variables from .env file

require("dotenv").config(); 


//limiting
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


//port number
const port = process.env.SERVER_PORT;



const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});




//Routes

const dataRoute = require("./routes/data");
app.use("/api/data", dataRoute);
const filterdataRoute = require("./routes/filter");
app.use("/api", filterdataRoute);
app.use("/uploads",express.static("./uploads"))




// Connect to the database


db.connect((err) => {
  if (err) throw err;
  console.log("MySQL database connected!");
});



// Start the server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
