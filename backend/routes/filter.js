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
    const department =req.body.department;
    if(gender===""&&certified ===""&& department==="")
    {
      console.log(1)
      const sqlSetect = "select * from test1 where  title_of_certification=?"
      db.query(sqlSetect,c, (err, result) => {
          res.send(result);

        });
    }
    else if(c===""&& certified ===""&& department==="" )
    {
      console.log(2)
      const sqlSetect = "select * from test1 where  gender=?"
      db.query(sqlSetect,gender, (err, result) => {
          res.send(result);

        });
    }
    else if(gender===""&&c===""&& department==="")
    {
      console.log(3)
      console.log(certified)
      const sqlSetect = "select * from test1 where  provide_link=?"
      db.query(sqlSetect,certified, (err, result) => {
          res.send(result);

        });
    }
    else if(gender===""&&c===""&& certified ==="")
    {
      const sqlSetect = "select * from test1 where  department=?"
      db.query(sqlSetect,department, (err, result) => {
          res.send(result);

        });
    }
    
    else if(certified===""&& department==="")
    {
      console.log(certified)
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification =?AND gender =?"
      db.query(sqlSetect,[c,gender] ,(err, result) => {
          res.send(result);

        });
    }
    else if(gender===""&& department==="")
    {
      console.log(5)
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification =? AND  provide_link=?"
      db.query(sqlSetect,[c,certified] ,(err, result) => {
          res.send(result);

        });
    }
    else if(c===""&& department==="")
    {
      console.log(6)
      const sqlSetect = "SELECT *FROM test1 WHERE provide_link=? AND gender =?"
      db.query(sqlSetect,[certified,gender] ,(err, result) => {
          res.send(result);

        });
    }
    else if(c==="" && gender==="")
    {
      const sqlSetect = "SELECT *FROM test1 WHERE provide_link=? AND department =?"
      db.query(sqlSetect,[certified,department] ,(err, result) => {
          res.send(result);

        });
    }
    else if(c==="" && certified==="")
    {
      const sqlSetect = "SELECT *FROM test1 WHERE gender=? AND department =?"
      db.query(sqlSetect,[gender,department] ,(err, result) => {
          res.send(result);

        });
    }
    else if(gender==="" && certified==="")
    {
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification=? AND department =?"
      db.query(sqlSetect,[c,department] ,(err, result) => {
          res.send(result);

        });
    }
    else if(gender==="")
    {
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification=?  AND provide_link=? AND department=?"
      db.query(sqlSetect,[c,certified,department] ,(err, result) => {
          res.send(result);
            
        });
    }
    else if(certified==="")
    {
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification=? AND gender =? AND  department=?"
      db.query(sqlSetect,[c,gender,department] ,(err, result) => {
          res.send(result);
            
        });
    }
    else if(c==="")
    {
      const sqlSetect = "SELECT *FROM test1 WHERE  gender =? AND provide_link=? AND department=?"
      db.query(sqlSetect,[gender,certified,department] ,(err, result) => {
          res.send(result);
            
        });
    }
    else if(department==="")
    {
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification=? AND gender =? AND provide_link=?"
      db.query(sqlSetect,[c,gender,certified] ,(err, result) => {
          res.send(result);
            
        });
    }
    else
    {
      console.log(7)
      const sqlSetect = "SELECT *FROM test1 WHERE title_of_certification=? AND gender =? AND provide_link=? AND department=?"
      db.query(sqlSetect,[c,gender,certified,department] ,(err, result) => {
          res.send(result);
            
        });
    }
    
});
module.exports=router;