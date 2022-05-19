const protector = require("../../_protector");
const Subjects = require("../../../models/subjects");

const getSubjects = async (req, res) => {
  const isLogged = protector.checkToken(req.cookies["app-token"]);

  if (!isLogged) {
    return res.status(403).json("Forbidden");
  }

  const subjects_DB = await Subjects.find();

  const resposne = {
    success: true,
    subjects: subjects_DB,
  };

  return res.status(200).json(resposne);
};

const addSubjects = async (req, res) => {
  const isLogged = protector.checkToken(req.cookies["app-token"]);

  if (!isLogged) {
    return res.status(403).json("Forbidden");
  }

  const subject = req.body.name;
  const resposne = {
    success: false,
  };

  try {
    await Subjects.create({ name: subject });

    resposne.success = true;
  } catch (error) {
    console.log("Error");
  }

  return res.status(200).json(resposne);
};

module.exports = {
  getSubjects,
  addSubjects,
};
