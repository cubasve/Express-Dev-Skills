var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills'); //require functions from controllers

// skillsCtrl = {
//   index: index,
//   show: show,
// } - Equivalent to requiring controllers functions in

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// app.get('/skills', function(req, res) {
//   res.render('skills/index'), {
//     skills: skillsDb.getAll()
//   } 
// })


router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new); //new must be before :id - or else new would never get hit since router would think it matches :id route and will set :id to new
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
