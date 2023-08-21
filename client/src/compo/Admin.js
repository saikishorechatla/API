import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function Admin() {
  const [genderData, setGenderData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5010/api/data');
        const data = response.data;

        const genderCounts = {};

        data.forEach(person => {
          const key = `${person.Name_of_Faculty}-${person.gender}`;
          if (!genderCounts[key]) {
            genderCounts[key] = 0;
          }
          genderCounts[key]++;
        });

        const genderChartData = Object.keys(genderCounts).map(key => ({
          name: key,
          value: genderCounts[key],
        }));

        setGenderData(genderChartData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const COLORS = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];

  return (
    <div>
      <h2>Gender Distribution by Faculty</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={genderData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={({ name, percent }) => `${name.split('-')[0]} ${(percent * 100).toFixed(2)}%`}
            >
              {genderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Admin;
