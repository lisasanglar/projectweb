const console = require('console');
const db = require('../models')
const Product = db.products;
const Op = db.Sequelize.Op;
// Create and Save a new product
exports.create = (req, res) => {
// Validate request
    6
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
// Create a product
    const prod = {
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        description: req.body.description,
        type: req.body.type
    }
// Save product in the database
    Product.create(prod)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the product."
            })
        })
}
// Retrieve all product from the database.
exports.findAll = (req, res) => {
    console.log('a')
    Product.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            })
        })
}
// Find a single product with an id
exports.findOne = (req, res) => {
// console.log('id')
    const id = req.params.id
    Product.findByPk(id)
        .then(data => {res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving product with id=${id}`
            });
        });
}
// Update a product by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Product.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Product was updated successfully.'
                });
            } else {
                res.send({
                    message: `Cannot update product with id=${id}. Maybe product was not
found or is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Produt with id=${id}`
            })
        })
}
// Delete a product with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Product.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete product with id=${id}. Product not found!`});
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Porduct with id=${id}`
            });
        });
}
// Delete all products from the database.
exports.deleteAll = (req, res) => {
}
// Find all products type
exports.findByType = (req, res) => {
    console.log('b'+req.query.id)
    const type = req.query.type
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null
    Product.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            })
        })
}
