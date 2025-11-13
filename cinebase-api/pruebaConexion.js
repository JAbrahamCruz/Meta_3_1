import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('cinedb', 'backenduser', 'temppwd', {
    host: 'localhost',
    dialect: 'mysql'
});

async function prueba() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

prueba();