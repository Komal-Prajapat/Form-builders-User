import React, { useState } from "react";
import Sidebar from "../formbuilder/navbar/Sidebar";
import FormCom from "../formbuilder/form/FormCom";
import { Button } from 'semantic-ui-react'; // Assuming you are using Semantic UI React for toast messages
import './style.css'

const Dashboard = () => {
  const [formFields, setFormFields] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showWelcomeMsg, setShowWelcomeMsg] = useState(true); // Initially show welcome message

  const handleFieldSelect = (field) => {
    setFormFields([...formFields, field]);
  };

  const handleCreate = () => {
    setShowForm(true);
    setShowWelcomeMsg(false); // Hide welcome message on create
  };

  const handleDelete = () => {
    setFormFields([]);
    setShowForm(false); 
    setShowToast(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 offset-md-2 col-lg-8 offset-lg-4 col-xl-6 offset-xl-3">
          <div className="topbar">
            <Button onClick={handleCreate} className="btn  btncreate">Create</Button>
            <Button onClick={handleDelete} className="btn btndelete">Delete</Button>
          </div>
          {showWelcomeMsg && (
            <div className="welcome-msg">
              <p>Welcome! Click on the buttons above to get started.</p>
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 col-lg-4 col-xl-3">
          <Sidebar onFieldSelect={handleFieldSelect} />
        </div>
        <div className="col-md-10 col-lg-8 col-xl-9">
          {showForm && <FormCom formFields={formFields} className="form" />}
        </div>
      </div>

   
      {showToast && (
        <div className="toast-container deletecontainer">
        
          <p>Form deleted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
