const router = require("express").Router();
const {
  getAllCategoryController,
  createCategoryController,
  deleteCategoryController,
  updateCategoryController,
  getOneCategoryController,
} = require("../controllers/CategoryController");

router
  .get("/", getAllCategoryController)
  .post("/", createCategoryController)
  .delete("/:id", deleteCategoryController)
  .put("/:id", updateCategoryController)
  .get("/:id", getOneCategoryController);

module.exports = router;
