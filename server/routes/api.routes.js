const router = require("express").Router();
const apiAuthRouter = require("./api.auth.routes");
const apiBookRouter = require("./api.books.routes");
const apiCategoryRouter = require("./api.categories.routes");

router.use("/auth", apiAuthRouter);
router.use("/books", apiBookRouter);
router.use("/categories", apiCategoryRouter);

module.exports = router;
