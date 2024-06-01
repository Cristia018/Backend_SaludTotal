import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";

const user = sequelize.define('Usuario', {
    correo: {
        type: DataTypes.STRING
    },
    clave: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.INTEGER,
        references: {
            model: 'rol',
            key: 'id'
        }
    }
}, {tableName:'usuario', createdAt:false, updatedAt:false})

export default user