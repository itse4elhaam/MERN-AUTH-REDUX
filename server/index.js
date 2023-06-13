import express from "express";
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; 

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send('sever is ready')
})

app.get("/api/sample", (req, res) => {
    res.status(200).json({ messsage: 'sample' })
})

// serving static files here:


app.listen(PORT, () => {
	console.log(`Listening at: http://localhost:${PORT}/`);
});