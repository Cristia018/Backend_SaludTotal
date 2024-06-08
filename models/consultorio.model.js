import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";

const consultorio = sequelize.define('consultorio', {
    numero_consultorio: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.STRING
    },
    medico: {
        type: DataTypes.INTEGER,
        references: {
            model: 'medico',  
            key: 'id'
        }
    }
}, {
    tableName: 'consultorio',
    createdAt: false,
    updatedAt: false
});

export default consultorio;