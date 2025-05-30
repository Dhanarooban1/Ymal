import prisma from "./config/database.js";
import cors from "cors";
import { config } from "dotenv";
import express from "express";



import UserRoutes from './routes/userRoutes.js'

config();

const PORT = Number(process.env.PORT);

const app = express();

app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {
  res.send("running!");
});



app.use('/api/users', UserRoutes);




app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
});










