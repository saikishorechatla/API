import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../styles/add.css';
import { useCustomContext } from './Context';

export default function Add() {
  const { vData } = useCustomContext();
  const { id } = useCustomContext();
  const [file, setFile] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState('');
  const [certifyingAgency, setCertifyingAgency] = useState('');
  const [remarks, setRemarks] = useState('');
  const [certificationCode, setCertificationCode] = useState('');

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
    formData.append('id', id);
    formData.append('vData', JSON.stringify(vData));
    formData.append('certifying_agency', certifyingAgency);
    formData.append('remarks', remarks);
    formData.append('certification_code', certificationCode);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      const res = await axios.post('http://localhost:5010/api/data/add', formData, config);

      if (res.data.status === 201) {
        console.log('success');
      } else {
        console.log('error');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <center className='add_center'>
      <div className='add_Card'>
        <div className='container mt-3 '>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='add_lebel'>Select Your Image</Form.Label>
              <Form.Control type='file' accept='.png' name='photo' onChange={setimgfile} />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlSelect1'>
              <Form.Label className='add_lebel'>Select a Certificate</Form.Label>
              <Form.Control as='select' onChange={handleCertificateChange}>
                <option value=''>Select</option>
                <option value='Certified Foundations Associate'>Certified Foundations Associate</option>
                <option value='Oracle Certified Associate'>Oracle Certified Associate</option>
                <option value='WTN-WCF'>Wipro</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='certifyingAgency'>
              <Form.Label>Certifying Agency</Form.Label>
              <Form.Control type='text' value={certifyingAgency} onChange={(e) => setCertifyingAgency(e.target.value)} />
            </Form.Group>
            <Form.Group controlId='remarks'>
              <Form.Label>Remarks</Form.Label>
              <Form.Control type='text' value={remarks} onChange={(e) => setRemarks(e.target.value)} />
            </Form.Group>
            <Form.Group controlId='certificationCode'>
              <Form.Label>Certification Code</Form.Label>
              <Form.Control type='text' value={certificationCode} onChange={(e) => setCertificationCode(e.target.value)} />
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
// const [file, setFile] = useState('');
// const [name, setName] = useState();
// const [code, setCode] = useState('');
// const [remarks, setRemarks] = useState('');
// const [campus, setCampus] = useState('');
// const [agency, setAgency] = useState('');
// const [department, setDepartment] = useState('');
// const [gender, setGender] = useState('');
// const [provideLink, setProvideLink] = useState('');
// const [title, setTitle] = useState('');