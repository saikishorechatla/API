import React, { useState } from 'react';
import axios from 'axios';
import '../styles/addData.css'; // Import your CSS file

const AddData = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [remarks, setRemarks] = useState('');
  const [campus, setCampus] = useState('');
  const [agency, setAgency] = useState('');
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');
  const [provideLink, setProvideLink] = useState('');
  const [title, setTitle] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
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

  const handleProvideLinkChange = (event) => {
    setProvideLink(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      code,
      remarks,
      campus,
      agency,
      department,
      gender,
      provideLink,
      title
    };

    axios.post('http://localhost:5010/api/data/enterdata', data)
      .then(response => {
        console.log('Data successfully sent:', response.data);
        // Handle success or additional actions here
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div className="adddata_">
      <form onSubmit={handleSubmit}>
        <label className="adddata_lebel" htmlFor="nameInput">Name:</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleNameChange}
        />

        <label className="adddata_lebel" htmlFor="codeInput">Code:</label>
        <input
          type="text"
          id="codeInput"
          value={code}
          onChange={handleCodeChange}
        />

        <label className="adddata_lebel" htmlFor="remarksInput">Remarks:</label>
        <input
          type="text"
          id="remarksInput"
          value={remarks}
          onChange={handleRemarksChange}
        />

        <label className="adddata_lebel" htmlFor="campusInput">Campus:</label>
        <input
          type="text"
          id="campusInput"
          value={campus}
          onChange={handleCampusChange}
        />

        <label className="adddata_lebel" htmlFor="agencyInput">Agency:</label>
        <input
          type="text"
          id="agencyInput"
          value={agency}
          onChange={handleAgencyChange}
        />

        <label className="adddata_lebel" htmlFor="departmentInput">Department:</label>
        <input
          type="text"
          id="departmentInput"
          value={department}
          onChange={handleDepartmentChange}
        />

        <label className="adddata_lebel" htmlFor="genderInput">Gender:</label>
        <input
          type="text"
          id="genderInput"
          value={gender}
          onChange={handleGenderChange}
        />

        <label className="adddata_lebel" htmlFor="provideLinkInput">Provide Link:</label>
        <input
          type="text"
          id="provideLinkInput"
          value={provideLink}
          onChange={handleProvideLinkChange}
        />

        <label className="adddata_lebel" htmlFor="titleInput">Title of Certification:</label>
        <input
          type="text"
          id="titleInput"
          value={title}
          onChange={handleTitleChange}
        />
        <br></br>
        <br></br>
        <button type="submit" className="adddata-send-button">Add Data</button>
      </form>
    </div>
  );
};

export default AddData;
