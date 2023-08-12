import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from 'react';



export default function Add() {
  const [file,setFile] = useState("");
  const setimgfile = (e)=>{
      setFile(e.target.files[0])
  }

  const addUserData = async(e)=>{
      e.preventDefault();

      var formData = new FormData();
      formData.append("photo",file)

      const config = {
          headers:{
              "Content-Type":"multipart/form-data"
          }
      }

      const res = await axios.post("http://localhost:5010/api/data/add",formData,config);
     
      if(res.data.status === 201){
          console.log("sucesss")
      }else{
          console.log("error")
      }
  }

  return (
      <>
          <div className='container mt-3'>
              <h1>Upload Your Img Here</h1>

              <Form>
             
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Select Your Image</Form.Label>
                      <Form.Control type="file" name='photo' onChange={setimgfile} />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={addUserData}>
                      Submit
                  </Button>
              </Form>
          </div>
      </>
  )

}
