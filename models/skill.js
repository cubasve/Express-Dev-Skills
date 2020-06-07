const skills = [
    {id: 01, skill: 'HTML', mastery: true},
    {id: 02, skill: 'CSS', mastery: true},
    {id: 03, skill: 'JavaScript', mastery: false},
    {id: 04, skill: 'Express', mastery: false},
]

module.exports = {
    getAll: getAll,
    getOne: getOne,
}

function getAll() {
    return skills;
}

function getOne() {
    return skills.find((skill) => skill.id === parseInt(id));
}