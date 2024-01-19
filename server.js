import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: './conn.env' });

mongoose.connect(process.env.CONN_STR);

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected'));

app.listen(process.env.PORT, () => console.log(`Server connected to PORT: ${process.env.PORT}`));