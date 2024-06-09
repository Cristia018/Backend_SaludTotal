import express from 'express'
import cors from 'cors'
import { connectDB } from './db/dbConnection.js'
import authRoutes from './routes/auth.routes.js'
import datesRouter from './routes/dates.routes.js'
import pacienteRouter from './routes/pacientes.routes.js'


const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({origin:"*"}))

app.use("/auth", authRoutes)
app.use("/dates", datesRouter)
app.use("/pacientes", pacienteRouter)


connectDB()

app.listen(3000, ()=>{
    console.log('Running server...')
})

