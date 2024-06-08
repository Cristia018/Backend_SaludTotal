import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";

const especialidad = sequelize.define('especialidad', {
    nombre_especialidad: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'especialidad', createdAt: false, updatedAt: false});

export default especialidad;
