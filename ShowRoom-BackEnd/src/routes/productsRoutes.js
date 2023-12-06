const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController")

router.get("/list", productsController.productsList);
// router.get("/sales", productsController.discountedProducts);
// router.get("/detail/:id", productsController.productDetail);
// router.get("/:category", productsController.productDetail);

module.exports = router;