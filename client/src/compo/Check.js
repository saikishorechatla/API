import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCustomContext } from './Context'; // Adjust the path to your context file
import '../styles/check.css';

const Check = () => {
  const [inputValue, setInputValue] = useState('');
  const { updateVData, updateId } = useCustomContext(); // Use the context functions
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendData = () => {
    axios.post('http://localhost:5010/api/data/check', { id: inputValue })
      .then(response => {
        const responseData = response.data;

        // Update context values based on response
        updateVData(responseData.data);
        updateId(inputValue);

        if (responseData.data.length === 0) {
          navigate('/adddata');
        } else {
          navigate('/add');
        }
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div className="check-container">
      <label htmlFor="idInput">Enter Your ID:</label>
      <input
        type="text"
        id="idInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="send-button" onClick={handleSendData}>Send Data</button>
    </div>
  );
};

export default Check;
