import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios"; // Import the axios library

const BulkAdd = () => {
  const [csvData, setCsvData] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const [fileError, setFileError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileError(null);
      parseCsvFile(file);
    } else {
      setFileError("Please select a CSV file.");
      setCsvData([]);
      setJsonData([]);
    }
  };

  const parseCsvFile = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        if (result.data && result.data.length > 0) {
          setCsvData(result.data);
          const headers = result.data[0];
          const jsonData = result.data.slice(1).map((row) => {
            const obj = {};
            for (let i = 0; i < headers.length; i++) {
              obj[headers[i]] = row[i];
            }
            return obj;
          });
          setJsonData(jsonData);

          const queries = jsonData.map((row) => {
            const values = Object.values(row)
              .slice(1) // Remove the first value
              .map((value) => `'${value}'`)
              .join(", ");
            return `(${values})`;
          });

          const insertQuery = `INSERT INTO test1 (${Object.keys(
            jsonData[0]
          )
            .slice(1) // Remove the first column
            .join(", ")}) VALUES ${queries.join(", ")};`;

          const CSVDATA = insertQuery;

          // Send CSVDATA to the specified URL using axios
          axios
            .post("http://localhost:5010/api/data/bulk", { CSVDATA }, {
              headers: {
                "Content-Type": "application/json"
              }
            })
            .then((response) => {
              console.log("Data sent successfully:", response.data);
            })
            .catch((error) => {
              console.error("Error sending data:", error);
            });
        } else {
          setCsvData([]);
          setJsonData([]);
        }
      },
      error: (error) => {
        setFileError("Error parsing CSV file.");
        console.error("Error parsing CSV:", error);
      },
    });
  };

  return (
    <div>
      <h2>Bulk Add</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {fileError && <p style={{ color: "red" }}>{fileError}</p>}
      {csvData.length > 0 && (
        <div>
          <h3>CSV Data</h3>
          <table>
            <thead>
              <tr>
                {csvData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <h3>JSON Data</h3>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default BulkAdd;
