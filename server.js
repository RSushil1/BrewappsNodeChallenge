import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";


//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json("Welcome to the Book Collection RestApi by Sushil Singh Rathore, go to api/books/get-book for fetch all book list");
})

//routes
app.use("/api/books", bookRoutes);

//PORT
const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`);
});