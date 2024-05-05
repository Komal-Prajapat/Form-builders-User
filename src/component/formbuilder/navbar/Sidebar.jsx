import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faCalendarAlt, 
  faClock, 
  faSignature, 
  faList, 
  faCheckCircle, 
  faCheckSquare, 
  faAlignLeft, 
  faTable, 
  faStar, 
  faArrowAltCircleDown, 
  faCaretDown 
} from '@fortawesome/free-solid-svg-icons';
import { MdOutlineWrongLocation } from "react-icons/md";

const Sidebar = ({ onFieldSelect }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const fieldOptions = [
    { name: 'Heading', icon: faList },
    { name: 'Full Name', icon: faUser },
    { name: 'Email Address', icon: faEnvelope },
    { name: 'Phone', icon: faPhone },
    { name: 'Date Picker', icon: faCalendarAlt },
    { name: 'Time Picker', icon: faClock },
    { name: 'Appointment', icon: faCalendarAlt },
    { name: 'Signature', icon: faSignature },
    { name: 'Long Text Paragraph', icon: faAlignLeft },
    { name: 'Dropdown', icon: faCaretDown },
    { name: 'Single Choice', icon: faCheckCircle },
    { name: 'Multiple Choice', icon: faCheckSquare },
    { name: 'Input Table', icon: faTable },
    { name: 'Star Rating', icon: faStar },
    { name: 'Submit', icon: faArrowAltCircleDown },
  ];

  const handleFieldSelect = (field) => {
    onFieldSelect(field);
  };

  const sidebarClass = isOpen ? 'sidebar-container open' : 'sidebar-container';

  return (
<div className="container">
<div className={sidebarClass} >
      <p className='d-flex box'>
        <h2 className="sidebar-title fieldoptions">Field Options</h2>
        {/* <span className="crossicon" onClick={toggleSidebar}><MdOutlineWrongLocation /></span> */}
      </p>
      <ul className="field-list">
        {fieldOptions.map((option, index) => (
          <li key={index} onClick={() => handleFieldSelect(option.name)} className="field-item">
            <FontAwesomeIcon icon={option.icon} className="field-icon" />
            <span className="field-name">{option.name}</span> {/* Added span for the field name */}
          </li>
        ))}
      </ul>
    </div>
</div>
  );
};

export default Sidebar;
