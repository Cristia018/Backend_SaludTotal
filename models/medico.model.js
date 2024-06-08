import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from "sequelize";

const medico = sequelize.define('medico', {
    nombre: {
        type: DataTypes.STRING
    },
    especialidad: {
        type: DataTypes.INTEGER,
        references: {
            model: 'especialidad',
            key: 'id'
        }
    }
}, {
    tableName: 'medico',
    createdAt: false,
    updatedAt: false
});
export default medico;
