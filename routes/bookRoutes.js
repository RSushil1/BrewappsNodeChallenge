import express from "express";
import {
  createBookController,
  getBookController,
  getSingleBookController,
  deleteBookController,
  updateBookController,
} from "../controllers/bookController.js";

const router = express.Router();

//routes
router.post("/create-book",createBookController);


//get Books
router.get("/get-book", getBookController);

//single Book
router.get("/get-book/:bid", getSingleBookController);

//routes
router.put("/update-book/:bid", updateBookController);

//delete Book
router.delete("/delete-book/:bid", deleteBookController);


export default router;