const skills = [
  { id: 1, skill: "HTML", done: true },
  { id: 2, skill: "CSS", done: true },
  { id: 3, skill: "JavaScript", done: true },
  { id: 4, skill: "Node.js", done: true },
  { id: 5, skill: "Express", done: true },
  { id: 6, skill: "MongoDB", done: false },
  { id: 7, skill: "React", done: false },
  { id: 8, skill: "Python", done: false },
  { id: 9, skill: "SQL", done: true },
  { id: 10, skill: "C#", done: true },
];

module.exports = {
  getAll,
  getOne,
};

function getOne(id) {
  return skills.find((s) => s.id === parseInt(id));
}

function getAll() {
  return skills;
}
