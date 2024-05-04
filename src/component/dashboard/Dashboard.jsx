import React, { useState } from "react";
import Sidebar from "../formbuilder/navbar/Sidebar";
import FormCom from "../formbuilder/form/FormCom";
import { Button } from 'semantic-ui-react'; // Assuming you are using Semantic UI React for toast messages
import './style.css'

const Dashboard = () => {
  const [formFields, setFormFields] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFieldSelect = (field) => {
    setFormFields([...formFields, field]);
  };

  const handleCreate = () => {
    setShowForm(true);
  };
const handleDelete = () => {
  setFormFields([]);
  setShowForm(false); // Hide the form
  setShowToast(true);
};


  return (
    <div className="App" style={{ marginLeft: "300px" }}>
      <Button onClick={handleCreate}>Create</Button>
      <Button onClick={handleDelete}>Delete</Button>

      <div style={{ display: "flex" }}>
        <Sidebar onFieldSelect={handleFieldSelect} />
        {showForm && <FormCom formFields={formFields} className="form" />}
      </div>

      {/* Toast message */}
      {showToast && (
        <div className="toast-container">
          {/* Toastify component goes here */}
          <p>Form deleted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
