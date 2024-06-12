import {Router} from 'express'
import {deleteDate, getDates, getPendingDatesByPatient, postDate} from '../controllers/dates.controller.js'

const router = Router()

router.post('/', postDate)

router.get('/all', getDates)

router.get('/', getPendingDatesByPatient)

router.delete('/:id', deleteDate)

export default router