const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const db =require("../connection/db.config")


router.use(bodyParser.urlencoded({extended:true}))



router.post('/filter/',
async (req, res) => {
    const  c = req.body.selectedoption;
    const gender=req.body.selectedgender;
    const certified=req.body.selectedverification;
    if(gender===""&&certified ==="")
    {
      console.log(1)
      const sqlSetect = "select * from test1 where  title_of_certification=?"
      db.query(sqlSetect,c, (err, result) => {
          res.send(result);

        });
    }
    else if(c===""&& certified ==="" )
    {
      console.log(2)
      const sqlSetect = "select * from test1 where  gender=?"
      db.query(sqlSetect,gender, (err, result) => {
          res.send(result);

        });
    }
    else if(gender===""&&c==="")
    {
      console.log(3)
      console.log(certified)
      const sqlSetect = "select * from test1 where  provide_link=?"
      db.query(sqlSetect,certified, (err, result) => {
          res.send(result);

        });
    }
    
    else if(certified==="")
    {
      console.log(certified)
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification =?AND gender =?"
      db.query(sqlSetect,[c,gender] ,(err, result) => {
          res.send(result);

        });
    }
    else if(gender==="")
    {
      console.log(5)
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification =? AND  provide_link=?"
      db.query(sqlSetect,[c,certified] ,(err, result) => {
          res.send(result);

        });
    }
    else if(c==="")
    {
      console.log(6)
      const sqlSetect = "SELECT *FROM test1 WHERE provide_link=? AND gender =?"
      db.query(sqlSetect,[certified,gender] ,(err, result) => {
          res.send(result);

        });
    }
    else
    {
      console.log(7)
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification=? AND gender =? AND provide_link=?"
      db.query(sqlSetect,[c,gender,certified] ,(err, result) => {
          res.send(result);
            
        });
    }
    
});
module.exports=router;