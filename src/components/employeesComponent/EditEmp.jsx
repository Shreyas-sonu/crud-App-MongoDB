import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "./../../services/AxiosInstance";

const EditEmp = () => {
  let { id } = useParams();
  let [updateEmp, setUpdateEmp] = useState({
    emp_id: "",
    emp_name: "",
    emp_email: "",
    emp_phone: "",
    emp_edu: "",
    emp_exp: "",
    emp_city: "",
    emp_skills: [],
    emp_salary: "",
    emp_designation: "",
    emp_gender: "",
  });
  let {
    emp_name,
    emp_salary,
    emp_designation,
    emp_city,
    emp_edu,
    emp_exp,
    emp_skills,
    emp_gender,
    emp_phone,
    emp_email,
    emp_id,
  } = updateEmp;
  let handleChange = e => {
    let { name, value } = e.target;
    setUpdateEmp({ ...updateEmp, [name]: value });
  };

  useEffect(() => {
    try {
      let fetchData = async () => {
        let { data } = await axiosInstance.get(`/emp/${id}`);
        setUpdateEmp(data.payload)
        console.log(updateEmp)
      };
      fetchData();
    } catch (error) {
      toast.error(error);
    }
  }, [id]);

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = {
        emp_name,
        emp_salary,
        emp_designation,
        emp_city,
        emp_edu,
        emp_exp,
        emp_skills,
        emp_gender,
        emp_phone,
        emp_email,
        emp_id,
      };
      await axiosInstance.put(`/emp/${id}`, payload);
      window.location.assign("/");
      toast.success(`successfully ${updateEmp.emp_name} is updated`);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <section className="formBlock">
      <article>
        <h2>Edit Employee Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emp_name">Employee name</label>
            <input
              type="text"
              className="form-control"
              name="emp_name"
              value={emp_name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_name">Employee Id</label>
            <input
              type="text"
              className="form-control"
              name="emp_id"
              value={emp_id}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_email">Employee Email</label>
            <input
              type="text"
              className="form-control"
              name="emp_email"
              value={emp_email}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_salary">Employee Salary</label>
            <input
              type="text"
              className="form-control"
              name="emp_salary"
              value={emp_salary}
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="emp_designation">Employee Designation</label>
            <select
              name="emp_designation"
              value={emp_designation}
              onChange={handleChange}
            >
              <option value="java developer">Java Developer</option>
              <option value="node developer">Nodejs Developer</option>
              <option value="frontend developer">frontend Developer</option>
              <option value="api developer">Api Developer</option>
            </select>
          </div>
          <div
            className="form-group"
            name="emp_gender"
            value={emp_gender}
            onChange={handleChange}
          >
            <label htmlFor="gender">Employee Gender</label>
            <input type="radio" name="emp_gender" value="male" /> Male
            <input type="radio" name="emp_gender" value="female" />
            Female
            <input type="radio" name="emp_gender" value="others" />
            others
          </div>
          <div className="form-group">
            <label htmlFor="emp_edu">Employee Edu</label>
            <input
              type="text"
              className="form-control"
              name="emp_edu"
              value={emp_edu}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_exp">Employee exp</label>
            <input
              type="text"
              className="form-control"
              name="emp_exp"
              value={emp_exp}
              required
              onChange={handleChange}
            />
          </div>
          <div
            className="form-group"
            value={emp_skills}
          >
            <label htmlFor="emp_skills">Employee skills</label>
            <input
              type="checkbox"
              name="emp_skills"
              value="Java"
            />
            <small>
              <b>Java </b>
            </small>
            <input type="checkbox" name="emp_skills" value="JavaScript" />
            <small>
              <b>JS </b>
            </small>
            <input type="checkbox" name="emp_skills" value="HTML5 & CSS3" />
            <small>
              <b>HTML&CSS</b>
            </small>
            <input type="checkbox" name="emp_skills" value="React JS" />
            <small>
              <b>React JS </b>
            </small>
            <input type="checkbox" name="emp_skills" value="mongo DB" />
            <small>
              <b>MongoDB </b>
            </small>
            <input type="checkbox" name="emp_skills" value="Node JS" />
            <small>
              <b>Node </b>
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="emp_city">Employee City</label>
            <input
              type="text"
              className="form-control"
              name="emp_city"
              value={emp_city}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_phone">Employee Phone</label>
            <input
              type="text"
              className="form-control"
              name="emp_phone"
              value={emp_phone}
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button>Update</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default EditEmp;
