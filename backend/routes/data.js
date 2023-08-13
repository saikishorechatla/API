const express = require("express");
const router = express.Router();
const multer = require("multer");
const moment = require("moment")



var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,`${Date.now()}`+".png")
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
const db =require("../connection/db.config")
// routes
router.get("/", (req, res) => {
    const sqlSetect = "select s_no,Name_of_Faculty,faculty_emp_iD,title_of_certification,certifying_agency,gender,provide_link,certification_code,remarks,department,campus from test1 ";
    db.query(sqlSetect, (err, result) => {
        res.json(result);
    });
});
    router.post("/add",upload.single("photo"),(req,res)=>{
    const {filename} = req.file;
    const {  selectedCertificate,textInput } = req.body;
    

        
    if( !filename){
        res.status(422).json({status:422,message:"fill all the details"})
    }
    
    try {

            db.query("INSERT INTO test2 (file,emp_id, title_of_certification) VALUES (?,?,?);",[filename,textInput, selectedCertificate],(err,result)=>{

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
router.post("/bulk", (req, res) => {
    const { CSVDATA } = req.body;
    try{
    db.query(CSVDATA,(err,result)=>{

        if(err){
            console.log(err)
        }else{
            console.log("data added")
            res.status(201).json({status:201,data:req.body})
        }
    })
    db.query("DELETE t2 FROM test1 t1 JOIN test1 t2 ON t1.title_of_certification = t2.title_of_certification  AND t1.Name_of_Faculty = t2.Name_of_Faculty AND t1.s_no < t2.s_no"
    ,(err,result)=>{
    if(err){
        console.log("error")
    }else{
        console.log("data get")
    }
    
})
}catch (error) {
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