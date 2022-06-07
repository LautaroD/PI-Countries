const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('touristActivity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dificultad: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
        duracion: {
            type: DataTypes.INTEGER
        },
        temporada: {
            type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),
        }
    },
        { timestamps: false }
    );
};