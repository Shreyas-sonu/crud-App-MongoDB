const { model, Schema } = require("mongoose");

const EmployeeSchema = new Schema(
  {
    emp_id: {
      type: String,
      required: [true, "Employee id is required"],
    },
    emp_name: {
      type: String,
      required: [true, "Employee Name is required"],
    },
    emp_email: {
      type: String,
      required: [true, "Employee email is required"],
    },
    emp_phone: {
      type: Number,
      required: [true, "Employee phone is required"],
    },
    emp_exp: {
      type: Number,
      required: [true, "Employee exp is required"],
    },
    emp_edu: {
      type: String,
      required: [true, "Employee Edu is required"],
    },
    emp_designation: {
      type: String,
      required: [true, "Employee designation is required"],
    },
    emp_gender: {
      type: [""],
      required: [true, "Employee gender is required"],
    },
    emp_city: {
      type: String,
      // required: [true, "Employee city is required"],
    },
    emp_salary: {
      type: Number,
      // required: [true, "Employee Number is required"],
    },
    emp_skills: {
      type: [""],
    },
  },
  { timestamps: true }
);

module.exports = model("employee", EmployeeSchema);
