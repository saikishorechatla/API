import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useCustomContext } from './Context'; // Adjust the path
import '../styles/add.css';

export default function Add() {
  const [file, setFile] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState('');
  const [textInput, setTextInput] = useState('');
  const { vData } = useCustomContext(); // Use vData from the context

  const [provideLink, setProvideLink] = useState('');
  const [certificationCode, setCertificationCode] = useState('');
  const [certifyingAgency, setCertifyingAgency] = useState('');
  const [remarks, setRemarks] = useState('');

  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCertificateChange = (e) => {
    setSelectedCertificate(e.target.value);
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
      body: {
        selectedCertificate: selectedCertificate,
        textInput: textInput,
      },
    };

    const res1 = await axios.post('http://localhost:5010/api/data/add', formData, config);

    if (res1.data.status === 201) {
      console.log('Image upload success');
    } else {
      console.log('Image upload error');
    }

    const employeeData = {
      empId: textInput,
    };

    const res2 = await axios.post('http://localhost:5010/api/data/f2', employeeData);

    if (res2.data.status === 201) {
      console.log('Employee data update success');
    } else {
      console.log('Employee data update error');
    }
  };
  return (
    <center className='add_center'>
      <div className='add_Card'>
        <div className='container mt-3'>
          <Form>
            {vData.map((dataItem) => (
              <div key={dataItem.s_no} className='addx_data-item'>
                <Form.Group controlId={`formBasicText-${dataItem.s_no}`}>
                  <Form.Label className='addx_label'>Name of Faculty</Form.Label>
                  <Form.Control
                    type='text'
                    value={dataItem.Name_of_Faculty}
                    readOnly
                    className='addx_input'
                  />
                </Form.Group>
  
                <Form.Group controlId={`formBasicText-${dataItem.s_no}`}>
                  <Form.Label className='addx_label'>Faculty Employee ID</Form.Label>
                  <Form.Control
                    type='text'
                    value={dataItem.faculty_emp_iD}
                    readOnly
                    className='addx_input'
                  />
                </Form.Group>
                <Form.Group controlId={`formBasicText-${dataItem.s_no}`}>
                  <Form.Label className='addx_label'>Gender</Form.Label>
                  <Form.Control
                    type='text'
                    value={dataItem.gender}
                    readOnly
                    className='addx_input'
                  />
                </Form.Group>
                <Form.Group controlId={`formBasicText-${dataItem.s_no}`}>
                  <Form.Label className='addx_label'>Department</Form.Label>
                  <Form.Control
                    type='text'
                    value={dataItem.department}
                    readOnly
                    className='addx_input'
                  />
                </Form.Group>
  
                <Form.Group controlId={`formBasicText-${dataItem.s_no}`}>
                  <Form.Label className='addx_label'>Campus</Form.Label>
                  <Form.Control
                    type='text'
                    value={dataItem.campus}
                    readOnly
                    className='addx_input'
                  />
                </Form.Group> 
                   </div>
            ))}
               
            <Form.Group controlId='exampleForm.ControlSelect1'>
              <Form.Label className='addx_label'>Select a Certificate</Form.Label>
              <Form.Control as='select' onChange={handleCertificateChange} className='addx_input'>
                <option value=''>Select</option>
                <option value='Certified Foundations Associate'>Certified Foundations Associate</option>
                <option value='Oracle Certified Associate'>Oracle Certified Associate</option>
                <option value='WTN-WCF'>Wipro</option>
              </Form.Control>
            </Form.Group>
               <Form.Group controlId='provideLink'>
              <Form.Label className='addx_label'>Provide Link</Form.Label>
              <Form.Control
                type='text'
                value={provideLink}
                onChange={(e) => setProvideLink(e.target.value)}
                className='addx_input'
              />
            </Form.Group>
            <Form.Group controlId='certificationCode'>
              <Form.Label className='addx_label'>Certification Code</Form.Label>
              <Form.Control
                type='text'
                value={certificationCode}
                onChange={(e) => setCertificationCode(e.target.value)}
                className='addx_input'
              />
            </Form.Group>
            <Form.Group controlId='certifyingAgency'>
              <Form.Label className='addx_label'>Certifying Agency</Form.Label>
              <Form.Control
                type='text'
                value={certifyingAgency}
                onChange={(e) => setCertifyingAgency(e.target.value)}
                className='addx_input'
              />
            </Form.Group>
            <Form.Group controlId='remarks'>
              <Form.Label className='addx_label'>Remarks</Form.Label>
              <Form.Control
                type='text'
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className='addx_input'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicFile'>
              <Form.Label className='addx_label'>Select Your Image</Form.Label>
              <Form.Control type='file' accept=".png" name='photo' onChange={setimgfile} />
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
            