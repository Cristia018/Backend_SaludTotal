import dateModel from '../models/citas.model.js'
import {request, response} from 'express'

export const getDates = async (req, res) => {

}

export const getDate = async (req, res) => {
    
}

export const postDate = async (req = request, res = response) => {
    try {
        const {date} = req.body
        if (!date) return res.status(400).json({msg:'Missing data'})
        const {fecha_destino} = date
        if (new Date(fecha_destino) < new Date()) return res.status(400).json({msg:"Fecha fuera de los límites"})
        const newDate = await dateModel.create(date)
        return res.status(201).json({msg:"Cita creada exitosamente.", data: newDate})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Error en el servidor"})
    }
}

