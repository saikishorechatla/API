import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';
import '../styles/data.css'; 



const Data = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    axios
      .get("http://localhost:5010/api/data")
      .then((response) => {
      
        setData(response.data);
        
       })
      .catch((error) => {
      
        console.error(error);
      });
  }, []); 
    
  return (
    <div className="data-container">
       

      <Table data={data}/>

    </div>
  );
}

export default Data;
