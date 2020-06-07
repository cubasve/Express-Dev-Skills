var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

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
router.get('/:id', skillsCtrl.show);

module.exports = router;
