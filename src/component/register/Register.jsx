import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter a valid email address"),
  password: Yup.string().min(6).required("Please enter a password"),
});

const Register = () => {
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:9090/api/register", values);
      console.log(response.data); 
      toast.success("Register successful.");
  
      
      setTimeout(() => {
        console.log("Redirecting to dashboard...");
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container con">
      <div className="row">

        <div className="col-md-6 d-md-block d-none ">
          <img src="https://static.vecteezy.com/system/resources/previews/000/118/887/original/free-website-vector-elements.jpg" alt="" className="img-fluid image" style={{height:"400px"}}/>
        </div>

        <div className="col-md-6 formcontainer">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="form-group">
              <b><ul><p style={{textAlign:"center", }} className="heading"> Register </p></ul></b>
                <label htmlFor="name" className="form-label">Name</label>
                <Field type="text" name="name" className="form-control form-input" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" name="email" className="form-control form-input" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <Field type="password" name="password" className="form-control form-input" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <button type="submit" className="btn btn-primary   submit-button">Submit</button>
              <p className="mt-3">
                If already have an account, then <Link to="/login">Login</Link>
              </p>
            </Form>
          </Formik>
          <ToastContainer />
        </div>

      </div>
    </div>
  );
};

export default Register;
