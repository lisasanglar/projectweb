const console = require('console');
const db = require('../models')
const User = db.user;
const Op = db.Sequelize.Op;
// Create and Save a new user
exports.create = (req, res) => {
// Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
// Create a user
  const prod = {
    name: req.body.name
  }
// Save product in the database
  User.create(prod)
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
// Retrieve all user from the database.
exports.findAll = (req, res) => {
  console.log('a')
  User.findAll()
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
// Find a single user with an id
exports.findOne = (req, res) => {
// console.log('id')
  const id = req.params.id
  User.findByPk(id)
    .then(data => {res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving product with id=${id}`
      });
    });
}
// Update a user by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  User.update(req.body, {
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
        message: `Error updating User with id=${id}`
      })
    })
}
// Delete a product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${id}. User not found!`});
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete User with id=${id}`
      });
    });
}
// Delete all user from the database.
exports.deleteAll = (req, res) => {
}
