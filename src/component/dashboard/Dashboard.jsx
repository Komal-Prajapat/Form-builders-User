import React, { useState } from "react";
// import { Sidebar } from 'semantic-ui-react';
import Sidebar from "../formbuilder/navbar/Sidebar";
import FormCom from "../formbuilder/form/FormCom";
// import Navbar from "../Navbar";
import './style.css'
useState;
const Dashboard = () => {
  const [formFields, setFormFields] = useState([]);

  const handleFieldSelect = (field) => {
    setFormFields([...formFields, field]);
  };
  return (
    <div className="App" style={{marginLeft:"300px"}}>
      {/* <Navbar></Navbar> */}
      <h1 style={{}} className="m-auto heading">
        Form Builder App..
      </h1>
      <div style={{ display: "flex" }}>
        <Sidebar onFieldSelect={handleFieldSelect} />
        <FormCom formFields={formFields} className="form"/>
      </div>
    </div>
  );
};

export default Dashboard;
