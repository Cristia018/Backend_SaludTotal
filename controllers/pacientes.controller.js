import {Paciente, Usuario} from '../models/index.js';

export const getPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll({
            include: {
                model: Usuario,
                attributes: ['correo'],
                required:true,
                as:'user'
            }
        })
        return res.status(200).json({ pacientes })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: error })
    }
}