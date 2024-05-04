import React, { useState } from "react";
import Sidebar from "../formbuilder/navbar/Sidebar";
import FormCom from "../formbuilder/form/FormCom";
import { Button, Icon } from 'semantic-ui-react'; // Assuming you are using Semantic UI React for toast messages
import './style.css'

const Dashboard = () => {
  const [formFields, setFormFields] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFieldSelect = (field) => {
    setFormFields([...formFields, field]);
  };

  const handleCreate = () => {
    setShowForm(true);
    setShowSidebar(false); // Close sidebar on create
    setShowToast(false); // Hide toast message on create
  };

  const handleDelete = () => {
    setFormFields([]);
    setShowForm(false); 
    setShowSidebar(false); // Close sidebar on delete
    setShowToast(true);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button onClick={toggleSidebar} color="blue">
              <Icon name="bars" />
              Toggle Sidebar
            </Button>
            <Button onClick={handleCreate} color="green">
              <Icon name="plus" />
              Create
            </Button>
            <Button onClick={handleDelete} color="red">
              <Icon name="trash" />
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
          <div className="d-flex">
            {showSidebar && <Sidebar onFieldSelect={handleFieldSelect} />}
            {showForm && <FormCom formFields={formFields} className="form" />}
          </div>
        </div>
      </div>

      {/* Toast message */}
      {showToast && (
        <div className="toast-container">
          <p>Form deleted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
