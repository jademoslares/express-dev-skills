const skills = [
  { id: 1, skill: "HTML", description: "Test Description1", done: true },
  { id: 2, skill: "CSS", description: "Test Description2", done: true },
  { id: 3, skill: "JavaScript", description: "Test Description3", done: true },
  { id: 4, skill: "Node.js", description: "Test Description4", done: false },
  { id: 5, skill: "Express", description: "Test Description5", done: false },
  { id: 6, skill: "MongoDB", description: "Test Description6", done: false },
  { id: 7, skill: "React", description: "Test Description7", done: false },
  { id: 8, skill: "Python", description: "Test Description8", done: false },
  { id: 9, skill: "SQL", description: "Test Description9", done: true },
  { id: 10, skill: "C#", description: "Test Description0", done: true },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function create(skill) {
  skill.id = skills[skills.length - 1].id + 1;
  skill.done = false;
  skills.push(skill);
}
function getOne(id) {
  return skills.find((s) => s.id === parseInt(id));
}

function getAll() {
  return skills;
}
function deleteOne(id) {
  const idx = skills.findIndex((s) => s.id === parseInt(id));
  skills.splice(idx, 1);
}

function update(id, skill) {
  id = parseInt(id);
  const s = skills.find((s) => s.id === parseInt(id));
  Object.assign(s, skill);
}