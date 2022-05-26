const { Router } = require('express');
const { getAllCountries, getIdPais, getPaisName } = require('../controllers/countriesController.js');

const router = Router();

router.get('/', getPaisName, getAllCountries)

router.get('/:idPais', getIdPais)

module.exports = router;
