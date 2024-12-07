import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PoliceRegister from "./pages/PoliceRegister";
import Camera from "./pages/Camera";
import Home from "./pages/Home";
import MissingPersonList from "./pages/MissingPersonList";
import ReportMissingPerson from "./pages/ReportMissingPerson";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/policeReg" Component={PoliceRegister} />
        <Route path="/camera" Component={Camera} />
        <Route path="/missingPersonList" Component={MissingPersonList} />
        <Route path="/reportMissingPerson" Component={ReportMissingPerson} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
