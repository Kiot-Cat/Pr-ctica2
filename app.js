import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/streaming.controller.js";

dotenv.config()
mongoose.connect(process.env.url)
.then(() => console.log("si sirve"))
.catch((error) => console.log("no sirve"))
const app = express();

app.use(cors());
app.listen(4000, () => console.log("funciona"))

test();