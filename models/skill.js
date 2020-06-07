const skills = [
    {id: 01, skill: 'HTML', mastery: true},
    {id: 02, skill: 'CSS', mastery: true},
    {id: 03, skill: 'JavaScript', mastery: false},
    {id: 04, skill: 'Express', mastery: false},
]

module.exports = {
    getAll,
}

function getAll() {
    return skills;
}