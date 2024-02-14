const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/:id/:skill/:done', skillsCtrl.show);
module.exports = router;