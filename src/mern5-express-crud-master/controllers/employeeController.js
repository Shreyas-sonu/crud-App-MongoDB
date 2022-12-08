let EmployeeSchema = require("../models/Employee");
/*
@access private 
@URL /api/create-emp
@HTTP method => POST
*/
exports.createEmployeeController = async (req, res, next) => {
  let payload = await EmployeeSchema.create(req.body);
  res
    .status(201)
    .json({ success: true, message: "successfully employee created", payload });
};

/*
@access public 
@URL /api/emp-all
@HTTP method => GET
*/

exports.fetchAllEmpController = async (req, res, next) => {
  try {
    let payload = await EmployeeSchema.find({});
    res.status(200).json({ success: true, payload });
  } catch (error) {
    console.log(error);
  }
};

exports.fetchOneEmpController = async (req, res, next) => {
  try {
    let payload = await EmployeeSchema.findOne({ _id: req.params.id });
    res.status(200).json({ success: true, payload });
  } catch (error) {
    console.log(error);
  }
};

exports.updateEmpController = async (req, res, next) => {
  let updateId = await EmployeeSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
  res.status(201).json({
    success: true,
    message: "successfully employee updated",
    updateId,
  });
};

exports.deleteEmpController = async (req, res, next) => {
  await EmployeeSchema.deleteOne({ _id: req.params.id });
  res.status(203).json({
    success: true,
    message: "successfully employee deleted",
  });
};
