import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";


const rol = sequelize.define('Rol', {
    nombre: {
        type: DataTypes.STRING
    }
}, {tableName:'rol'})

export default rol