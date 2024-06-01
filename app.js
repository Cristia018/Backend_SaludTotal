import express from 'express'
import cors from 'cors'
import { connectDB } from './db/dbConnection.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({origin:"*"}))

app.use("/auth", authRoutes)

connectDB()

app.listen(3000, ()=>{
    console.log('Running server...')
})

