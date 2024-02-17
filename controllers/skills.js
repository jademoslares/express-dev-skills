const Skill = require("../models/skills");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
};

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "Dev Skills",
  });
}

function show(req, res) {
  res.render("skills/show", {
    skills: Skill.getOne(req.params.id),
    title: "Skill Details",
  });
}
function newSkill(req, res) {
  res.render("skills/new", { title: "New Skill" });
}

function create(req, res) {
  console.log(req.body);
  // Models are responible for CRUD'ing the data
  Skill.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function update(req, res) {
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}
function edit(req, res) {
  res.render("skills/edit", {
    skill: Skill.getOne(req.params.id),
    title: "Edit Skill",
    // skill,
  });
}
