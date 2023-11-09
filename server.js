import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";


//configure env
dotenv.config();

//databse config
connectDB();

// // ESmodule
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/books", bookRoutes);

//PORT
const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`);
});