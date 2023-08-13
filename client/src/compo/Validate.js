import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const Validate = () => {
  const [data, setData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5010/api/data/getdata", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.status === 201) {
        console.log("data get");
        setData(response.data.data); // Assuming response contains the data array
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleDownload = (filename) => {
    axios
      .get(`http://localhost:5010/uploads/${filename}`, {
        responseType: 'blob', // Set the response type to blob to handle binary data
      })
      .then(response => {
        saveAs(response.data, filename );
      })
      .catch(error => {
        console.error("Error downloading image:", error);
      });
  };

  return (
    <div className="container mt-2">
      <h1 className="text-center mt-2">Image Upload Projects With Mysql database</h1>

      <div className="d-flex justify-content-between align-items-center mt-5">
        {data.length > 0 &&
          data.map((el, i) => (
            <div key={i} className="mb-3" style={{ width: '22rem', height: '18rem' }}>
              <img src={`http://localhost:5010/uploads/${el.file}`} alt="User Upload" style={{ width: '700px', textAlign: 'center', margin: 'auto' }} className="mt-2" />
              <button onClick={() => handleDownload(el.file)}>Download</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Validate;
