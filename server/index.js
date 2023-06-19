import express from "express";
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes.js";
import { notFound,errorHandler } from "./middleware/errMiddleware.js";
import connectDB from "./config/db.js"


dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT; 

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send('sever is ready')
})

app.get("/api/sample", (req, res) => {
    res.status(200).json({ messsage: 'sample' })
})

// can help us in identifying different errors
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Listening at: http://localhost:${PORT}/`);
});