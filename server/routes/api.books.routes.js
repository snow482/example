const {
  getOneBookController,
  createBookController,
  deleteBookController,
  updateBookController,
  getAllBooksController,
} = require("../controllers/BookController");
const verifyAccessToken = require("../middleware/verifyAccessToken");

const router = require("express").Router();

router
  .get("/", getAllBooksController)
  .post("/", verifyAccessToken,  createBookController)
  .delete("/:id", verifyAccessToken, deleteBookController)
  .put("/:id",  verifyAccessToken, updateBookController)
  .get("/:id", getOneBookController);

module.exports = router;
