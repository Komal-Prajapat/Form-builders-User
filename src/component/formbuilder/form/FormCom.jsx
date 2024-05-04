import React, { useState } from "react";
import "./style.css";
import ReactStars from 'react-rating-stars-component';
import { Rating } from 'semantic-ui-react';
import FormPreview from "./FormPreview";
import { useNavigate } from "react-router-dom";
const FormCom = ({ formFields }) => {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);
  const navigateToForm = () => {
    navigate("/form"); 5
  };
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


      case "email address":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <input
              type="email"
              name={field.toLowerCase().replace(/ /g, "_")}
              className="input-field"
              placeholder="email"
            />
          </div>
        );

      case "phone":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <input
              type="number"
              name={field.toLowerCase().replace(/ /g, "_")}
              className="input-field"
              placeholder="phone"
            />
          </div>
        );

      case "date picker":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <input
              type="date"
              name={field.toLowerCase().replace(/ /g, "_")}
              className="input-field"
            />
          </div>
        );

      case "time picker":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <input
              type="time"
              name={field.toLowerCase().replace(/ /g, "_")}
              className="input-field"
              placeholder="pick Time"
            />
          </div>
        );
      case "appointment":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <input
              type="date"
              name={field.toLowerCase().replace(/ /g, "_")}
              className="input-field"
            />
          </div>
        );

      case "signature":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <textarea
              type=""
              name={field.toLowerCase().replace(/ /g, "_")}
              className="input-field"
              placeholder="signature"
            />
          </div>
        );

      case "Long Text Paragraph":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <textarea
              type=""
              name={field.toLowerCase().replace(/ /g, "_")}
              className="input-field"
              placeholder=""
              rows={4}
              cols={10}
            />
          </div>
        );
      case "dropdown":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <select
              name={field.toLowerCase().replace(/ /g, "_")}
              className="dropdown-field"
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        );
      case "single choice":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <div>
              <input
                type="radio"
                id={`option1_${index}`}
                name={field.toLowerCase().replace(/ /g, "_")}
                value="option1"
              />
              <label htmlFor={`option1_${index}`}>Option 1</label>
            </div>
            <div>
              <input
                type="radio"
                id={`option2_${index}`}
                name={field.toLowerCase().replace(/ /g, "_")}
                value="option2"
              />
              <label htmlFor={`option2_${index}`}>Option 2</label>
            </div>
            <div>
              <input
                type="radio"
                id={`option3_${index}`}
                name={field.toLowerCase().replace(/ /g, "_")}
                value="option3"
              />
              <label htmlFor={`option3_${index}`}>Option 3</label>
            </div>
          </div>
        );

      case "Multiple Choice":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <div>
              <input
                type="checkbox"
                id={`option1_${index}`}
                name={`${field.toLowerCase().replace(/ /g, "_")}[]`}
                value="option1"
              />
              <label htmlFor={`option1_${index}`}>Option 1</label>
            </div>
            <div>
              <input
                type="checkbox"
                id={`option2_${index}`}
                name={`${field.toLowerCase().replace(/ /g, "_")}[]`}
                value="option2"
              />
              <label htmlFor={`option2_${index}`}>Option 2</label>
            </div>
            <div>
              <input
                type="checkbox"
                id={`option3_${index}`}
                name={`${field.toLowerCase().replace(/ /g, "_")}[]`}
                value="option3"
              />
              <label htmlFor={`option3_${index}`}>Option 3</label>
            </div>
          </div>
        );

      case "image":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
            <input
              type="file"
              name={field.toLowerCase().replace(/ /g, "_")}
              accept="image/*"
              className="file-input"
            />
          </div>
        );

      case "submit":
        return (
          <div key={index} className="form-field">
            {/* <label>{field}</label> */}
            <button className="submitbtn">Submit</button>
          </div>
        );
      case "input table":
        return (
          <div key={index} className="form-field">
            <label>{field}</label>
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
          </div>
        );

        case 'star rating':
          return (
            <div key={index} className="form-field">
              <label>{field}</label>
              <ReactStars
                count={5} // Number of stars
                size={24} // Size of the stars
                activeColor="#ffd700" // Color of active stars
                classNames="star-rating" // Optional: custom class for styling
                // Additional props for handling user input (onChange, value, etc.)
              />
            </div>
          );
          case 'scale rating':
            return (
              <div key={index} className="form-field">
                <label>{field}</label>
                <Rating maxRating={5} icon='star' size='massive' className="scale-rating" />
              </div>
            );
      
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
      
        const generateFormPreview = () => {
          setShowPreview(true);
        };
      
        return (
          <div className="container" style={{ height: "100vh", overflow: "hidden" }}>
  <div className="form-container" style={{ maxHeight: "calc(100vh - 50px)", overflowY: "auto" }}>
    {/* Your form fields */}
    {formFields.map((field, index) => renderInputField(field, index))}
  </div>
  <button onClick={navigateToForm} className="backtoform">Save Form</button>
</div>

        );
      };
      
      export default FormCom;