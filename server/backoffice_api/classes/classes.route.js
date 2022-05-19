const express = require('express');
const router = express.Router();
const classesService = require('./service');

router.get('/api/backoffice/classes', classesService.getClasses);
router.post('/api/backoffice/classes', classesService.addClasses);

module.exports = router;
