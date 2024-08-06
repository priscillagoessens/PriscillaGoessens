import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import projetRoutes from "./routes/projet.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());


app.use("/api/projets", projetRoutes)

app.listen(5000,() => {
    connectDB();
    console.log('Listening on port ' + PORT);
})