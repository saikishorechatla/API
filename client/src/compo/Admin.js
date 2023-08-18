// src/Admin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

function Admin() {
  const [genderData, setGenderData] = useState({ males: 0, females: 0 });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5010/api/data');
        const data = response.data;

        const genderCounts = {
          males: 0,
          females: 0,
        };

        data.forEach(person => {
          if (person.gender === 'male') {
            genderCounts.males++;
          } else if (person.gender === 'female') {
            genderCounts.females++;
          }
        });

        setGenderData(genderCounts);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const pieChartData = [
    { name: 'Males', value: genderData.males },
    { name: 'Females', value: genderData.females },
  ];

  const barChartData = [
    { name: 'Males', count: genderData.males },
    { name: 'Females', count: genderData.females },
  ];

  const COLORS = ['#3498db', '#e74c3c'];

  return (
    <div>
      <h2>Gender Distribution</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h3>Pie Chart</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Bar Chart</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={barChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Bar dataKey="count" fill="#3498db" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
