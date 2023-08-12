const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
//conntion 
const mysql = require("mysql");
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
router.use(bodyParser.urlencoded({extended:true}))

router.post('/filter/',
async (req, res) => {
    const  c = req.body.selectedoption;
    const gender=req.body.selectedgender;
    console.log(c)
    console.log(gender)
    if(gender==="")
    {
      console.log(1)
      const sqlSetect = "select * from test1 where  title_of_certification=?"
      db.query(sqlSetect,c, (err, result) => {
          res.send(result);
          console.log(result);
        });
    }
    else if(c==="")
    {
      console.log(2)
      const sqlSetect = "select * from test1 where  gender=?"
      db.query(sqlSetect,gender, (err, result) => {
          res.send(result);
          console.log(result);
        });
    }
    else 
    {
      console.log(3)
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification =?AND gender =?"
      db.query(sqlSetect,[c,gender] ,(err, result) => {
          res.send(result);
          console.log(result);
        });
    }
});
module.exports=router;