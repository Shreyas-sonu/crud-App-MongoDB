const express = require("express");
const router = express.Router();
const {
  createEmployeeController,
  fetchAllEmpController,
  fetchOneEmpController,
  updateEmp,
  updateEmpController,
  deleteEmpController,
} = require("../controllers/employeeController");

router.post("/create-emp", createEmployeeController);
router.get("/emp-all", fetchAllEmpController);
router.get("/emp/:id", fetchOneEmpController);
router.put("/emp/:id", updateEmpController);
router.delete("/emp/:id", deleteEmpController);

module.exports = router;
