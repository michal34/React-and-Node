const express = require('express');
const router = express.Router();
const plansService = require('./service');

router.get('/api/backoffice/plans', plansService.getPlans);
router.post('/api/backoffice/plans', plansService.setPlans);

module.exports = router;
