const axios = require('axios');
const { Country, TouristActivity } = require('../db.js');
const { Op } = require('sequelize');

async function getAllCountries(req, res, next) {
    try {
        const lastCountry = await Country.findByPk('SUR');
        if (!lastCountry) {
            let paises = (await axios('https://restcountries.com/v3/all')).data;
            let countries = paises.map(pais => ({
                id: pais.cca3,
                name: pais.name.common,
                imgBandera: pais.flags[0],
                continente: pais.continents?.[0],
                capital: (pais.capital) ? pais.capital?.[0] : 'Sin capital',
                subRegion: pais.subregion,
                area: pais.area,
                poblacion: pais.population
            }))
            await Country.bulkCreate(countries);
            console.log('Información adquirida de API');
            return res.send(countries)
        }
        else {
            let paises = await Country.findAll();
            console.log('Información adquirida de database');
            return res.send(paises)
        }
    } catch (error) {
        next(error)
    }
}

async function getPaisName(req, res, next) {
    let { name } = req.query;
    try {
        if (name.length <= 0) next()
        let pais = await Country.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
            include: [{
                model: TouristActivity,
                through: { attributes: [] }
            }]
        });
        if (!pais) {
            res.status(400).send('Pais no encontrado')
        } else {
            res.status(200).send(pais)
        }
    } catch (error) {
        next()
    }
}

async function getPaisNameExact(req, res, next) {
    let { name } = req.query;
    try {
        if (name.length <= 0) next()
        let pais = await Country.findAll({
            where: { name: `${name}` },
            include: [{
                model: TouristActivity,
                through: { attributes: [] }
            }]
        });
        if (!pais) {
            res.status(400).send('Pais no encontrado')
        } else {
            res.status(200).send(pais)
        }
    } catch (error) {
        next()
    }
}

async function getIdPais(req, res, next) {
    let { idPais } = req.params;
    idPais = idPais.toUpperCase();
    try {
        let pais = await Country.findByPk(idPais);
        if (!pais) {
            res.status(400).send('ID Erronea')
        } else res.status(200).send(pais)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllCountries,
    getIdPais,
    getPaisName,
    getPaisNameExact
}