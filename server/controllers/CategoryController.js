const CategoryService = require("../service/Category.service");

exports.getAllCategoryController = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategory();
    res.status(200).json({ message: "success", categories });
  } catch (error) {
    res.status(500).json({ message: error.message, categories: [] });
  }
};

exports.getOneCategoryController = async (req, res) => {
  try {
    const category = await CategoryService.getOneCategory();
    res.status(200).json({ message: "Success", category });
  } catch (error) {
    res.status(500).json({ message: error.message, category: {} });
  }
};

exports.createCategoryController = async (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === "") {
    res.status(400).json({ message: "Empty data" });
    return;
  }
  try {
    const category = await CategoryService.createCategory({
      name,
    });
    res.status(200).json({ message: "Success", category });
  } catch (error) {
    res.status(500).json({ message: error.message, category: {} });
  }
};

exports.deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const countDeletedCategories = await CategoryService.deleteCategory(id);
    if (countDeletedCategories > 0) {
      res.status(200).json({ message: "Success" });
    } else {
      res.status(400).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCategoryController = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  if (!name || name.trim() === "") {
    res.status(400).json({ message: "Empty data" });
    return;
  }
  try {
    const countUpdated = await CategoryService.updateCategory(req.body, id);

    if (countUpdated > 0) {
      const category = await CategoryService.getOneCategory(id);

      res.status(200).json({ message: "Success", category });
    } else {
      res.status(200).json({ message: "Fail" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, category: {} });
  }
};
