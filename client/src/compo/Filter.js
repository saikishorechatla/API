import React, { useState } from "react";
import axios from "axios";

import "../styles/Home.css"; // Import your CSS file for styling
import Table from "./Table";


const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [gender ,setGender]=useState("")
  const [data,setData] =useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the selected value to the server
    

    axios
      .post("http://localhost:5010/api/filter", {
       
        selectedoption:selectedOption,
        selectedgender:gender
      })
      .then((response) => {

        setData(response.data)
        console.log(response.data)
      })
      .catch((error) => console.error("Error sending data:", error));
  }
let capture
if(data.length===0)
{
    // <>No Data Found</>
    capture = null;
}
  else
{
    capture =<Table data={data}/>
}
  return (
    <>
    <div className="home-container">
      <h1 className="home-heading">Choose an AWS Certification</h1>
      <form className="home-form" onSubmit={handleSubmit}>
        <select
          className="home-select"
          value={selectedOption}
          onChange={handleChange}
          name="selectedoption"
        >
          <option value="">Select</option>
          <option value="Certified Foundations Associate">Certified Foundations Associate</option>
          <option value="Oracle Certified Associate">Oracle Certified Associate</option>
          <option value="WTN-WCF">
            Wipro
          </option>
        </select>
        <select
          className="home-select"
          value={gender}
          onChange={handleGender}
          name="genderOption"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">
            Female
          </option>
        </select>

        <button className="home-button" type="submit" >
          Submit
        </button>
      </form>
    
    </div >
   
    {capture}
    
    </>
  );
};

export default Home;
