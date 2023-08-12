import Filter from "./compo/Filter";
import Data from "./compo/Data";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./compo/Navbar";
import Add from "./compo/Add";
import Validate from "./compo/Validate";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/filter" element={<Filter />} />
        <Route path="/data" element={<Data />} />
        <Route path="/add" element={<Add/>}/>
        <Route path="/validate" element={<Validate/>}/>
      </Routes>
    </div>
  );
}

export default App;
