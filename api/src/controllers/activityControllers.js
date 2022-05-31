const { TouristActivity, Country } = require('../db.js');
const { Op } = require('sequelize');

async function createActivity(req, res, next) {
    let { nombre, dificultad, duracion, temporada, pais = [] } = req.body;
    try {
        const newActivity = await TouristActivity.create({
            nombre,
            dificultad,
            duracion,
            temporada
        });
        pais.forEach(async element => {
            let countrie = await Country.findOne({ where: { name: element } });
            newActivity.addCountry(countrie)
        });
        res.json(newActivity);
    } catch (error) {
        next(error)
    }
}

async function getAllActivities(req, res, next) {
    try {
        let activities = await TouristActivity.findAll({
            include: [{
                model: Country,
                through: { attributes: [] }
            }]
        });
        return res.send(activities)
    } catch (error) {
        next(error)
    }
}

async function getActivitiesByName(req, res, next) {
    let { name } = req.query;
    try {
        let activities = await TouristActivity.findAll({
            where: {
                nombre: { [Op.iLike]: `%${name}%` }
            },
            include: Country
        });
        return res.send(activities)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    createActivity,
    getAllActivities,
    getActivitiesByName
}
