import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbarComponent/Navbar";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import CreateEmployee from "./components/employeesComponent/CreateEmployee";
import Employee from "./components/employeesComponent/Employee";
import EditEmp from "./components/employeesComponent/EditEmp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-emp" element={<CreateEmployee />} />
        <Route path="/view-emp/:id" element={<Employee />} />
        <Route path="/edit-emp/:id" element={<EditEmp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
