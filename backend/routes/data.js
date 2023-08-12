const express = require("express");
const router = express.Router();
const multer = require("multer");
const moment = require("moment")
//conntion 
var nameOfFile
var imgconfig = multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,"./uploads");
  },
  filename:(req,file,callback)=>{
      callback(null,`${Date.now()}`)
      nameOfFile=file.originalname
      console.log(file.originalname)
  },
  
});

const isImage = (req,file,callback)=>{
  if(file.mimetype.startsWith("image")){
      callback(null,true)
  }else{
      callback(null,Error("only image is allowed"))
  }
}

var upload = multer({
  storage:imgconfig,
  fileFilter:isImage
})
const mysql = require("mysql2");
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

// routes
router.get("/", (req, res) => {
    const sqlSetect = "select s_no,Name_of_Faculty,faculty_emp_iD,title_of_certification,certifying_agency,gender,provide_link,certification_code,remarks,department,campus from test1 ";
    db.query(sqlSetect, (err, result) => {
      res.json(result);
    });
  });
  router.post("/add",upload.single("photo"),(req,res)=>{
    const {filename} = req.file;

  
    if( !filename){
        res.status(422).json({status:422,message:"fill all the details"})
    }
    
    try {

         db.query("INSERT INTO test2 (file) VALUES (?);",filename,(err,result)=>{
          console.log(filename+" 233")
            if(err){
                console.log(err)
            }else{
                console.log("data added")
                res.status(201).json({status:201,data:req.body})
            }
        })
    } catch (error) {
        res.status(422).json({status:422,error})
    }
});
router.get("/getdata",(req,res)=>{
  try {
      db.query("SELECT * FROM test2",(err,result)=>{
          if(err){
              console.log("error")
          }else{
              console.log("data get")
              res.status(201).json({status:201,data:result})
          }
      })
      
  } catch (error) {
      res.status(422).json({status:422,error})
  }
});
 
  module.exports = router;