const { TouristActivity, Country } = require('../db.js');

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

module.exports = createActivity;
