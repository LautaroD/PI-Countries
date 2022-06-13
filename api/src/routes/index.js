const { Router } = require('express');
const countries = require('./countries.js');
const { createActivity, getAllActivities, getActivitiesByName, deleteActivity } = require('../controllers/activityControllers.js')

const router = Router();

router.use('/countries', countries);

router.get('/activities', getAllActivities)

router.get('/getActivitiesByName', getActivitiesByName)

router.post('/activity', createActivity)

// router.delete('/activity/:id', deleteActivity)

// router.delete('/activity', deleteActivity)

module.exports = router;