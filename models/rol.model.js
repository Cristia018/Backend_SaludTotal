import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";


const rol = sequelize.define('rol', {
    nombre: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'rol',
    createdAt: false,
    updatedAt: false
});

export default rol