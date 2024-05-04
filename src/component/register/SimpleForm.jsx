import { useFormik } from "formik";
import React from "react";
import { signUpSchema } from "../schemas";

const initialValues = {
    name:"",
    email:"",
    password:"",
    confirm_password:"",
};
const SimpleForm = () => {
   const {values,errors,handleBlur,handleChange,handleSubmit,touched } =     useFormik({
            initialValues:initialValues,
            validationSchema:signUpSchema,
            onSubmit:(values)=>{
                console.log(values)
            }
        })
console.log(errors)
  return (
    <div style={{ marginTop: "30px", marginLeft: "40px" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">UserName </label>
        <input
         type="text"
          placeholder="Username" 
          id="name "
           name="name"
           value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
           />
           <p className="form-error">{errors.name}</p>
        <br></br>
        <br></br>
        <label htmlFor="email">Emailid </label>
        <input
          type="email"
          placeholder="email"
          id="email "
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         <p className="form-error">{errors.email}</p>
        <br></br>
        <br></br>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}

        />
         <p className="form-error">{errors.password}</p>
          <br></br>
        <br></br>
        <label htmlFor="Confirm_password">Confirm Password </label>
        <input
          type="text"
          placeholder="Confirm_Password"
          id=" confirm_password"
          name=" confirm_password"
          value={values. confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
          <p className="form-error">{errors.confirm_password}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
