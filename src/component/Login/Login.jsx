import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter a valid email address"),
  password: Yup.string().required("Please enter a password"),
});

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };


  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:9090/api/login", values);
      console.log(response.data);
      // If login is successful, show success message and redirect to dashboard
      toast.success("Login successful.");
  
      // Adding a delay of 2 seconds before redirecting to the dashboard
      setTimeout(() => {
        console.log("Redirecting to dashboard...");
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      // If login fails, show error toast
      toast.error("Login failed. Please check your email and password.");
    }
  };
  
  return (
    <div className="container con">
      <div className="row">
        <div className="col-md-6 d-md-block d-none ">
          <img src="https://static.vecteezy.com/system/resources/previews/000/118/887/original/free-website-vector-elements.jpg" alt="" className="img-fluid image" style={{ height: "400px" }} />
        </div>
        <div className="col-md-6 formcontainer">
          <div className="">
            <h2>Login</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
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
                <button type="submit" className="btn btn-primary submit-button">Login</button>
                <p className="mt-3">If you don't have an account, <Link to="/">Register</Link></p>
              </Form>
            </Formik>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
