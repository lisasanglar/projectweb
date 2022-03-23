module.exports = app => {
    const product = require("../controllers/product.controller.js");
    var router = require("express").Router();
// Create a new product
    router.post("/", product.create);
// Retrieve all products
    router.get("/", product.findAll);
// Retrieve all product type
    router.get("/type", product.findByType);
// Retrieve a single product with id
    router.get("/:id", product.findOne);
// Update a product with id
    router.put("/:id", product.update);
// Delete a product with id
    router.delete("/:id", product.delete);
// Delete all product
    router.delete("/", product.deleteAll);
    app.use('/api/product', router);
}
