import bookModel from "../models/bookModel.js";
import dotenv from "dotenv";

dotenv.config();

export const createBookController = async (req, res) => {
  try {
    const { id, title, author, summary } = req.body;
    // Validation
    if (!id || !title || !author || !summary) {
      return res.status(400).send({ error: "All fields are required" });
    }

    // Check if a book with the same ID already exists
    const existingBook = await bookModel.findOne({ id });
    if (existingBook) {
      return res.status(409).send({ error: "A book with the same ID already exists" });
    }

    const newBook = new bookModel({ ...req.body });
    await newBook.save();
    res.status(201).send({
      success: true,
      message: "Book Created Successfully",
      book: newBook,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating Book",
    });
  }
};

//view all books
export const getBookController = async (req, res) => {
  try {
    const Books = await bookModel
      .find({})
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      counTotal: Books.length,
      message: "All Books ",
      Books,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Erorr in getting Books",
      error: error.message,
    });
  }
};

// get single Book
export const getSingleBookController = async (req, res) => {
  try {
    const Book = await bookModel
      .findOne({ id: req.params.bid })
    res.status(200).send({
      success: true,
      message: "Single Book Fetched",
      Book,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Eror while getitng single Book",
      error,
    });
  }
};

//delete a book
export const deleteBookController = async (req, res) => {
  try {
    const bookToDelete = await bookModel.findOne({ id: req.params.bid });
    if (!bookToDelete) {
      return res.status(404).send({ success: false, message: "Book not found" });
    }

    await bookModel.findOneAndDelete({ id: req.params.bid });
    res.status(200).send({
      success: true,
      message: "Book Deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while deleting Book",
      error,
    });
  }
};



//upate Book
export const updateBookController = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const bookToUpdate = await bookModel.findOne({ id: req.params.bid });
    if (!bookToUpdate) {
      return res.status(404).send({ success: false, message: "Book not found" });
    }
    
    // Validation
    switch (true) {
      case !title:
        return res.status(500).send({ error: "Title is Required" });
      case !author:
        return res.status(500).send({ error: "Author is Required" });
      case !summary:
        return res.status(500).send({ error: "Summary is Required" });
    }

    const updatedBook = await bookModel.findOneAndUpdate(
      { id: req.params.bid },
      { title, author, summary },
      { new: true }
    );
    await updatedBook.save();
    
    res.status(201).send({
      success: true,
      message: "Book Updated Successfully",
      book: updatedBook,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error in Update Book",
    });
  }
};
