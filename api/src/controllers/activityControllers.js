const { TouristActivity } = require('../db.js');

async function createActivity(req, res, next) {
    let { nombre, dificultad, duracion, temporada } = req.body;
    try {
        const newActivity = await TouristActivity.create({
            nombre,
            dificultad,
            duracion,
            temporada
        });
        res.json(newActivity);
    } catch (error) {
        next(error)
    }
}

module.exports = createActivity;
