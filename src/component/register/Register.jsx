import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './form.css'

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name must be at least 2 characters").max(25, "Name must be at most 25 characters").required("Please enter your name"),
  email: Yup.string().email("Invalid email address").required("Please enter a valid email address"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Please enter a password"),
});

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://form-builder-api-se7h.onrender.com/api/register",
        values
      );
      console.log(response.data);
      toast.success("Registration successful.");
      setTimeout(() => {
        console.log("Redirecting to login...");
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Registration failed. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <h1 className="heading">Register</h1>
      <div className="container con">
        <div className="row">
          <div className="col-md-6 d-md-block d-none ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/118/887/original/free-website-vector-elements.jpg"
              alt=""
              className="img-fluid image"
              style={{ height: "400px" }}
            />
          </div>

          <div className="col-md-6 formcontainer">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="form-control form-input"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control form-input"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control form-input"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                  <p className="mt-3">
                    If you already have an account, then{" "}
                    <Link to="/login">Login</Link>
                  </p>
                </Form>
              )}
            </Formik>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
