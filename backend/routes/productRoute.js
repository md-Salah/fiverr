const express = require("express");
const { createBook, getAllBooks, updateBook, deleteBook, getSingleBook } = require("../controllers/productController");

const router = express.Router();

router.route("/books").get(getAllBooks);
router.route("/book/new").post(createBook);
router.route("/book/:id")
    .put(updateBook)
    .delete(deleteBook)
    .get(getSingleBook)

module.exports = router;