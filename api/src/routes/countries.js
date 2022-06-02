const { Router } = require('express');
const { getAllCountries, getIdPais, getPaisName, getPaisNameExact } = require('../controllers/countriesController.js');

const router = Router();

router.get('/', getPaisName, getAllCountries)

router.get('/detailCountry', getPaisNameExact)

router.get('/:idPais', getIdPais)

module.exports = router;
