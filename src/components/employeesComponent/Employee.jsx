import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./../../services/AxiosInstance";

import { faker } from "@faker-js/faker";

const Employee = () => {
  const randomPhoto = faker.image.avatar();

  let [emp, setEmp] = useState("");
  let { id } = useParams();
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/emp/${id}`);
      setEmp(data.payload);
    };
    fetchData();
  }, [id]);

  return (
    <section className="emp_block">
      <article>
        <aside className="sidebar">
          <figure>
            <img src={randomPhoto} alt={emp.emp_name} />
            <figcaption>
              <h3 style={{textAlign:"center"}}>{emp.emp_name}</h3>
            </figcaption>
          </figure>
        </aside>
        <aside className="mainbar">
          <h1>{emp.emp_name}</h1>
          <p>Salary : {emp.emp_salary}</p>
          <p>Designation : {emp.emp_designation}</p>
          <p>Gender : {emp.emp_gender}</p>
          <p>Skills : {emp.emp_skills}</p>
          <p>Experience : {emp.emp_exp} Years</p>
          <p>Email : {emp.emp_email}</p>
          <p>Ph Number: {emp.emp_phone}</p>
          <p>City : {emp.emp_city}</p>
        </aside>
      </article>
    </section>
  );
};

export default Employee;
