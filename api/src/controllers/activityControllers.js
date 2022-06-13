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
        return res.status(200).send(activities)
    } catch (error) {
        next(error)
    }
}

async function getActivitiesByName(req, res, next) {
    let { name } = req.query;
    if (!name) return res.sendStatus(404);
    try {
        let activities = await TouristActivity.findAll({
            where: {
                nombre: { [Op.iLike]: `%${name}%` }
            },
            include: Country
        });
        if (activities.length <= 0) return res.status(404).send('Actividad no encontrada')
        else return res.status(200).send(activities)
    } catch (error) {
        next(error)
    }
}

// async function deleteActivity(req, res, next) {
//     let { id } = req.params;
//     try {
//         // let actividad = await TouristActivity.findOne({ where: { nombre: name } });
//         // actividad.destroy();
//         await TouristActivity.destroy({
//             where: {
//                 id: id
//             }
//         });
//         res.send('Eliminado con exito')
//         // if (actividad.length === 0) return res.sendStatus(200)
//         // else return res.sendStatus(404)
//     } catch (error) {
//         next(error)
//     }
// }



module.exports = {
    createActivity,
    getAllActivities,
    getActivitiesByName
}
