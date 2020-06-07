const Skill = require('../models/skill');

module.exports = {
    index: index,
    show: show, //remember to export function or else nodemon will crash
    new: newSkill,
    create: create,
    delete: deleteSkill,

}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

// router.get('/', function(req,res) {
//     res.render('skills/index', {
//         skills: Skill.getAll()
//     });
// });