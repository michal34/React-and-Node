const express = require('express');
const router = express.Router();
const subjectsService = require('./service');

router.get('/api/backoffice/subjects', subjectsService.getSubjects);
router.post('/api/backoffice/subjects', subjectsService.addSubjects);

module.exports = router;
