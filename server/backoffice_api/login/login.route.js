const express = require('express');
const router = express.Router();
const loginService = require('./service');

router.post('/api/backoffice/login', loginService.login);
router.post('/api/backoffice/check-session', loginService.checkSession);

module.exports = router;
