import express from "express";
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes.js";
import { notFound,errorHandler } from "./middleware/errMiddleware.js";
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser";


dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

const PORT = process.env.PORT; 

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send('server is ready')
})

app.get("/api/sample", (req, res) => {
    res.status(200).json({ message: 'sample' })
})

// can help us in identifying different errors
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Listening at: http://localhost:${PORT}/`);
});