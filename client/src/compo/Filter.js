import React, { useState } from "react";
import axios from "axios";

import "../styles/Home.css";
import Table from "./Table";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [gender, setGender] = useState("");
  const [verification, setVerification] = useState(""); // New state for verification
  const [data, setData] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleVerification = (event) => {
    setVerification(event.target.value); // Handler for verification dropdown
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5010/api/filter", {
        selectedoption: selectedOption,
        selectedgender: gender,
        selectedverification: verification, // Include verification in the POST data
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error sending data:", error));
  };

  let capture;
  if (data.length === 0) {
    capture = null;
  } else {
    capture = <Table data={data} />;
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
            <option value="WTN-WCF">Wipro</option>
          </select>
          <select
            className="home-select"
            value={gender}
            onChange={handleGender}
            name="genderOption"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {/* New verification dropdown */}
          <select
            className="home-select"
            value={verification}
            onChange={handleVerification}
            name="verificationOption"
          >
            <option value="">Select</option>
            <option value="CERTIFIED">Verified</option>
            <option value="NA">Not Verified</option>
          </select>
          <button className="home-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      {capture}
    </>
  );
};

export default Home;
