import React, { useState } from "react";
import "./style.css";
import ReactStars from "react-rating-stars-component";
import { Rating } from "semantic-ui-react";
import FormPreview from "./FormPreview";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const FormCom = ({ formFields }) => {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);
  const [hiddenFields, setHiddenFields] = useState([]);

  const navigateToForm = () => {
    navigate("/form");
  };

  const handleDeleteField = (index) => {
    const updatedHiddenFields = [...hiddenFields, index];
    setHiddenFields(updatedHiddenFields);
  };

  if (!formFields || !Array.isArray(formFields)) {
    return <div>No form fields provided.</div>;
  }
  const renderInputField = (field, index) => {
    if (hiddenFields.includes(index)) {
      return null; // Hide the field if it's in the hiddenFields array
    }
  
    return (
      <div key={index} className="form-field">
        <label>{field}</label>
        <div className="d-flex my-2">
          {getFieldInput(field, index)}
          <span
            
          >
            <RiDeleteBinLine className="delete-button"
            onClick={() => handleDeleteField(index)} style={{color:"red" ,marginLeft:"4px"} }/>
          </span>
        </div>
      </div>
    );
  };
  
  const getFieldInput = (field, index) => {
   
   
    switch (field.toLowerCase()) {
      case "heading":
        return (
          <></>
          // <h2>HEADING</h2>
        );
  
      case "full name":
        return (
          <input
            type="email"
            name={field.toLowerCase().replace(/ /g, "_")}
            className="input-field"
            placeholder="Username"
          />
        );
  
      case "email address":
        return (
          <input
            type="email"
            name={field.toLowerCase().replace(/ /g, "_")}
            className="input-field"
            placeholder="email"
          />
        );
  
      case "phone":
        return (
          <input
            type="number"
            name={field.toLowerCase().replace(/ /g, "_")}
            className="input-field"
            placeholder="phone"
          />
        );
  
      case "date picker":
        return (
          <input
            type="date"
            name={field.toLowerCase().replace(/ /g, "_")}
            className="input-field"
          />
        );
  
      case "time picker":
        return (
          <input
            type="time"
            name={field.toLowerCase().replace(/ /g, "_")}
            className="input-field"
            placeholder="pick Time"
          />
        );
  
      case "appointment":
        return (
          <input
            type="date"
            name={field.toLowerCase().replace(/ /g, "_")}
            className="input-field"
          />
        );
  
      case "signature":
        return (
          <textarea
            type=""
            name={field.toLowerCase().replace(/ /g, "_")}
            className="input-field"
            placeholder="signature"
          />
        );
  
      case "long text paragraph":
        return (
          <textarea
            type=""
            name={field.toLowerCase().replace(/ /g, "_")}
            className="input-field"
            placeholder=""
            rows={4}
            cols={10}
          />
        );
  
      case "dropdown":
        return (
          <select
            name={field.toLowerCase().replace(/ /g, "_")}
            className="dropdown-field"
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        );
  
      case "single choice":
        return (
          <div>
            <input
              type="radio"
              id={`option1_${index}`}
              name={field.toLowerCase().replace(/ /g, "_")}
              value="option1"
            />
            <label htmlFor={`option1_${index}`}>Option 1</label>
  
            <input
              type="radio"
              id={`option2_${index}`}
              name={field.toLowerCase().replace(/ /g, "_")}
              value="option2"
            />
            <label htmlFor={`option2_${index}`}>Option 2</label>
  
            <input
              type="radio"
              id={`option3_${index}`}
              name={field.toLowerCase().replace(/ /g, "_")}
              value="option3"
            />
            <label htmlFor={`option3_${index}`}>Option 3</label>
          </div>
        );
  
      case "multiple choice":
        return (
          <div>
            <input
              type="checkbox"
              id={`option1_${index}`}
              name={`${field.toLowerCase().replace(/ /g, "_")}[]`}
              value="option1"
            />
            <label htmlFor={`option1_${index}`}>Option 1</label>
  
            <input
              type="checkbox"
              id={`option2_${index}`}
              name={`${field.toLowerCase().replace(/ /g, "_")}[]`}
              value="option2"
            />
            <label htmlFor={`option2_${index}`}>Option 2</label>
  
            <input
              type="checkbox"
              id={`option3_${index}`}
              name={`${field.toLowerCase().replace(/ /g, "_")}[]`}
              value="option3"
            />
            <label htmlFor={`option3_${index}`}>Option 3</label>
          </div>
        );
  
      case "image":
        return (
          <input
            type="file"
            name={field.toLowerCase().replace(/ /g, "_")}
            accept="image/*"
            className="file-input"
          />
        );
  
      case "submit":
        return (
          <button className="submitbtn">Submit</button>
        );
  
      case "input table":
        return (
          <table>
            <thead>
              <tr>
                <th>Field 1</th>
                <th>Field 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
            </tbody>
          </table>
        );
  
      case "star rating":
        return (
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            classNames="star-rating"
          />
        );
  
      case "scale rating":
        return (
          <Rating maxRating={5} icon='star' size='massive' className="scale-rating" />
        );
  
      default:
        return (
          <input
            type="text"
            name={field.toLowerCase().replace(/ /g, "_")}
            className="input-field"
          />
        );
    }
  };
  

  return (
    <div className="container forsmallerdeviceform" style={{ height: "100vh", overflow: "hidden" }}>
      <div className="form-container" style={{ maxHeight: "calc(100vh - 50px)", overflowY: "auto" }}>
        {/* Your form fields */}
        {formFields.map((field, index) => renderInputField(field, index))}
      </div>
      <button onClick={navigateToForm} className="backtoform">Save Form</button>
      <button onClick={navigateToForm} className="backtoform"
       onClick={<FormCom></FormCom>}> Form Perview </button>
    </div>
  );
};

export default FormCom;
