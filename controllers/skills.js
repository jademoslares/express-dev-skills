const Skill = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "Dev Skills",
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    skillNum: parseInt(req.params.id) + 1,
    title: "Skill Detail",
  });
}

module.exports = {
  index,
  show,
};
