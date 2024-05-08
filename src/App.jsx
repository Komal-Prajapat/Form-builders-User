import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPreview from "./component/formbuilder/form/FormPreview";
import Dashboard from "./component/dashboard/Dashboard";
import Register from "./component/register/Register";
import Login from "./component/Login/Login";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path="/form" element={<FormPreview></FormPreview>}></Route>
          <Route path="/" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
          {/* <Footer></Footer> */}
      </Router>
    </>
  );
};

export default App;
