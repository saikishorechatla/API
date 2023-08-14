import React, { useState } from "react";
import axios from "axios";

import "../styles/Home.css";
import Table from "./Table";
import "../styles/filter.css";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [gender, setGender] = useState("");
  const [verification, setVerification] = useState("");
  const [department, setDepartment] = useState("");
  const [data, setData] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleVerification = (event) => {
    setVerification(event.target.value);
  };

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5010/api/filter", {
        selectedoption: selectedOption,
        selectedgender: gender,
        selectedverification: verification,
        department: department,
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
      <br />
      <div>
        <center>
          <div className="home-container">
            <h3 className="home-heading">Filter</h3>
            <form className="home-form" onSubmit={handleSubmit}>
              <ul className="no-bullets">
                <li>
                  <label htmlFor="selectedOption">Select Certificate:</label>
                  <select
                    className="home-select"
                    value={selectedOption}
                    onChange={handleChange}
                    name="selectedoption"
                  >
                    <option value="">Select</option>
                    <option value="Certified Foundations Associate">
                      Certified Foundations Associate
                    </option>
                    <option value="Oracle Certified Associate">
                      Oracle Certified Associate
                    </option>
                    <option value="WTN-WCF">Wipro</option>
                  </select>
                </li>

                <li>
                  <label htmlFor="gender">Select Gender:</label>
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
                </li>

                <li>
                  <label htmlFor="verification">Select Verification:</label>
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
                </li>

                <li>
                  <label htmlFor="department">Select Department:</label>
                  <select
                    className="home-select"
                    value={department}
                    onChange={handleDepartment}
                    name="department"
                  >
                    <option value="">Select</option>
                    <option value="CSE HONORS">CSE HONORS</option>
                    <option value="AIDS">AIDS</option>
                    <option value="BES-1">BES-1</option>
                    <option value="CSE REGULAR">CSE REGULAR</option>
                  </select>
                </li>

                <li>
                  <button className="home-button" type="submit">
                    Submit
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </center>
        <br />
        <hr />
        <br />
        <center>{capture}</center>
      </div>
    </>
  );
};

export default Home;
