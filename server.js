import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user_route.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config({ path: './conn.env' });

mongoose.connect(process.env.CONN_STR);

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected'));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', userRouter);

app.listen(process.env.PORT, () => console.log(`Server connected to PORT: ${process.env.PORT}`));