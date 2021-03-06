const console = require('console');
const db = require('../models')
const Task = db.task;
const Op = db.Sequelize.Op;
// Create and Save a new task
exports.create = (req, res) => {
// Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
// Create a task
  const prod = {
    name: req.body.name
  }
// Save task in the database
  Task.create(prod)
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
// Retrieve all task from the database.
exports.findAll = (req, res) => {
  console.log('a')
  Task.findAll()
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
// Find a single task with an id
exports.findOne = (req, res) => {
// console.log('id')
  const id = req.params.id
  Task.findByPk(id)
    .then(data => {res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving product with id=${id}`
      });
    });
}
// Update a task by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Task.update(req.body, {
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
// Delete a task with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Task.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete task with id=${id}. Task not found!`});
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete tasks with id=${id}`
      });
    });
}
// Delete all task from the database.
exports.deleteAll = (req, res) => {
}
