const protector = require("../../_protector");
const Classes = require("../../../models/classes");
const Plans = require("../../../models/plans");

const getClasses = async (req, res) => {
  const isLogged = protector.checkToken(req.cookies["app-token"]);

  if (!isLogged) {
    return res.status(403).json("Forbidden");
  }

  const classes_DB = await Classes.find();

  const resposne = {
    success: true,
    classes: classes_DB,
  };

  return res.status(200).json(resposne);
};

const addClasses = async (req, res) => {
  const isLogged = protector.checkToken(req.cookies["app-token"]);

  if (!isLogged) {
    return res.status(403).json("Forbidden");
  }

  const className = req.body.name;
  const resposne = {
    success: false,
  };

  try {
    const classObject = await Classes.create({ name: className });

    await Plans.create({
      classId: classObject._id,
      plan: { 1: [], 2: [], 3: [], 4: [], 5: [] },
    });

    resposne.success = true;
  } catch (error) {
    console.log("Error");
  }

  return res.status(200).json(resposne);
};

module.exports = {
  getClasses,
  addClasses,
};
