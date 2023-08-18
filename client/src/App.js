import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./compo/Navbar";
import Filter from "./compo/Filter";
import Data from "./compo/Data";
import Add from "./compo/Add";
import Validate from "./compo/Validate";
import BulkAdd from "./compo/BulkAdd";
import Check from "./compo/Check";
import AddData from "./compo/AddData";
import Admin from "./compo/Admin";
import { CustomProvider } from './compo/Context'; // Adjust the path

import "./App.css";


function App() {
  return (
    <CustomProvider> {/* Wrap your app content with the CustomProvider */}
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Admin />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/data" element={<Data />} />
          <Route path="/add" element={<Add />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="/bulkadd" element={<BulkAdd />} />
          <Route path="/check" element={<Check />} />
          <Route path="/adddata" element={<AddData />} />
        </Routes>
      </div>
    </CustomProvider>
  );
}

export default App;
