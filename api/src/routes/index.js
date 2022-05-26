const { Router } = require('express');
const countries = require('./countries.js');
const activityController = require('../controllers/activityControllers.js')

const router = Router();

router.use('/countries', countries);

router.post('/activity', activityController)

module.exports = router;