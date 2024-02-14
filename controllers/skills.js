const Skill = require("../models/skills");

function index(req, res) {
  const skills = Skill.getAll();
  res.render("skills/index.ejs", { skills: skills });
}

function show(req, res) {
  res.send(`skill = ${req.params.id}`);
}

module.exports = {
  index,
  show,
};
