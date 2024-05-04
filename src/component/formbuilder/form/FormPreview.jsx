import React from "react";
import "./style.css";

const FormPreview = ({ formFields }) => {
  if (!formFields || !Array.isArray(formFields)) {
    return <div>No form fields provided.</div>;
  }

  const renderInputField = (field, index) => {
    switch (field.toLowerCase()) {
      case "heading":
        return <h2 key={index}>{field}</h2>;

      case "full name":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <input
              type="email"
              name={field.toLowerCase().replace(/ /g, "_")}
              className="input-field"
              placeholder="Username"
            />
          </div>
        );

      // Other cases for different input field types...

      default:
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <input
              type="text"
              name={field.toLowerCase().replace(/ /g, "_")}
              className="input-field"
            />
          </div>
        );
    }
  };

  return (
    <div className="form-preview">
      <h2>Form Preview</h2>
      <form className="form-container">
        {formFields.map((field, index) => renderInputField(field, index))}
      </form>
    </div>
  );
};

export default FormPreview;
