import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("SaludTotal", "root", "cristian1739", {
    host: "localhost",
    dialect: 'mysql',
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};