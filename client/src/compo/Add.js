import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../styles/add.css' 

export default function Add() {
  const [file, setFile] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState(''); // Default selected certificate
  const [textInput, setTextInput] = useState('');

  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCertificateChange = (e) => {
    setSelectedCertificate(e.target.value);
  };

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append('photo', file);
    formData.append('selectedCertificate', selectedCertificate);
    formData.append('textInput', textInput);
  
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body:
      {
        selectedCertificate:selectedCertificate,
        textInput:textInput
      }
    };
    console.log(config)
    const res = await axios.post('http://localhost:5010/api/data/add', formData, config);
  
    if (res.data.status === 201) {
      console.log('success');
    } else {
      console.log('error');
    }
  };

  return (
    <center className='add_center'>
    <div className='add_Card'>
      <div className='container mt-3 '>
       
        <Form>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label className='add_lebel'>Select Your Image</Form.Label>
            <Form.Control type='file' accept=".png" name='photo' onChange={setimgfile} />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Label className='add_lebel'>Select a Certificate</Form.Label>
            <Form.Control as='select' onChange={handleCertificateChange}>
            <option value="">Select</option>
          <option value="Certified Foundations Associate">Certified Foundations Associate</option>
          <option value="Oracle Certified Associate">Oracle Certified Associate</option>
          <option value="WTN-WCF">
            Wipro
          </option>
            </Form.Control>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label className='add_lebel'>Enter Empid </Form.Label>
            <Form.Control type='text' placeholder='Enter Empid' value={textInput} onChange={handleTextInputChange} />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
      </div>
    </center>
  );
}
