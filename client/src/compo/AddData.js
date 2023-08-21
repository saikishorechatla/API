import React, { useState } from 'react';
import axios from 'axios';
import '../styles/addData.css'; // Import your CSS file
import { useCustomContext } from './Context';
import { FormGroup, Label, Input } from 'reactstrap';

const AddData = () => {
  const [file, setFile] = useState('');
   const { id } = useCustomContext();
  const [name, setName] = useState();
  const [code, setCode] = useState('');
  const [remarks, setRemarks] = useState('');
  const [campus, setCampus] = useState('');
  const [agency, setAgency] = useState('');
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');
  
  const [title, setTitle] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handleCampusChange = (event) => {
    setCampus(event.target.value);
  };

  const handleAgencyChange = (event) => {
    setAgency(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

 

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     var formData = new FormData();
    formData.append('photo', file);
    formData.append('id', id);
    formData.append('name',name)
    formData.append('code',code)
    formData.append('remarks',remarks)
    formData.append('campus',campus)
    formData.append('agency',agency)
    formData.append('department',department)
    formData.append('gender',gender)
    
    formData.append('title',title)

      const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
     try {
      const res = await axios.post('http://localhost:5010/api/data/adddata', formData, config);

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
    
      <div className="adddata_">
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nameInput">Name:</Label>
            <Input
              type="text"
              id="nameInput"
              value={name}
              onChange={handleNameChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="codeInput">Code:</Label>
            <Input
              type="text"
              id="codeInput"
              value={code}
              onChange={handleCodeChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="remarksInput">Remarks:</Label>
            <Input
              type="text"
              id="remarksInput"
              value={remarks}
              onChange={handleRemarksChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="campusInput">Campus:</Label>
            <Input
              type="text"
              id="campusInput"
              value={campus}
              onChange={handleCampusChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="agencyInput">Agency:</Label>
            <Input
              type="text"
              id="agencyInput"
              value={agency}
              onChange={handleAgencyChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="departmentInput">Department:</Label>
            <Input
              type="text"
              id="departmentInput"
              value={department}
              onChange={handleDepartmentChange}
            />
          </FormGroup>
          
          <FormGroup>
  <Label htmlFor="genderInput">Gender:</Label>
  <Input
    type="select"
    id="genderInput"
    value={gender}
    onChange={handleGenderChange}
  >
    <option value="male">Male</option>
    <option value="female">Female</option>
  </Input>
</FormGroup>
          
         
          <FormGroup className='mb-3'>
          <Label className='add_lebel'>Select Your Image</Label>
          <Input type='file' accept='.png' name='photo' onChange={setimgfile} />
        </FormGroup>
          <FormGroup>
            <Label htmlFor="titleInput">Title of Certification:</Label>
            <Input
              type="select"
              id="titleInput"
              value={title}
              onChange={handleTitleChange}
            >
              <option value="">Select a title</option>
              <option value="Certified Foundations Associate">Certified Foundations Associate</option>
              <option value="Oracle Certified Associate">Oracle Certified Associate</option>
              <option value="Wipro">WTN-WCF</option>
            </Input>
          </FormGroup>
          
          <br />
          <br />
          <button type="submit" className="adddata-send-button" onSubmit={handleSubmit} >Add Data</button>
        </form>
      </div>
    );
};

export default AddData;
