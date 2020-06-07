const skills = [
    {id: 01, skill: 'HTML', mastery: true},
    {id: 02, skill: 'CSS', mastery: true},
    {id: 03, skill: 'JavaScript', mastery: false},
    {id: 04, skill: 'Express', mastery: false},
]

module.exports = { //export to controllers
    getAll: getAll, //key: value --> values are the functions below
    getOne: getOne,
    create, create,
    deleteOne: deleteOne, 
}

function getAll() { //returns all skills in the array
    return skills;
}

function getOne(id) { //get a particular skill
    return skills.find((skill) => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = skills.length;
    skill.mastery = false;
    skills.push(skill);
}

function deleteOne(id) {
    const index = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(index, 1);
}