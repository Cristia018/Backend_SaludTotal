import { Citas, Especialidad } from '../models/index.js'
import {request, response} from 'express'

export const getDates = async (req, res) => {
    try {
        const dates = await Citas.findAll({
           include:{
            as:'espec', 
            model:Especialidad,
            attributes:['nombre_especialidad'],
            required:true
           } 
        })

        return res.status(200).json({
            dates
        })
    } catch (error) {
        console.log(error);
        return res.status(500)
    }
}

export const getPendingDatesByPatient = async (req = request, res) => {
    const {user_id} = req.query
    try {
        const dates = await Citas.findAll({
           include:{
            as:'espec', 
            model:Especialidad,
            attributes:['nombre_especialidad'],
            required:true
           }, where: {
                paciente: user_id,
                estado: 'pendiente'
           }
        })

        return res.status(200).json({
            dates
        })
    } catch (error) {
        console.log(error);
        return res.status(500)
    }
}

export const getDate = async (req, res) => {
    
}

export const postDate = async (req = request, res = response) => {
    try {
        const {date} = req.body
        if (!date) return res.status(400).json({msg:'Missing data'})
        const {fecha_destino} = date
        if (new Date(fecha_destino) < new Date()) return res.status(400).json({msg:"Fecha fuera de los límites"})
        const newDate = await Citas.create(date)
        return res.status(201).json({msg:"Cita creada exitosamente.", data: newDate})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Error en el servidor"})
    }
}

