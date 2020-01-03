const models = require('../models')
const category = models.category
const Users = models.users
const event = models.event
const payment = models.payment
const favourites = models.favourites

exports.store = (req, res) => {
    payment.create(req.body)
    .then(payment => {
        res.send({
            message:"success",
            payment
        })
    })
}

exports.show = (req, res) => {
    Users.findOne({
        where: {id: req.params.id},
          include: [{
              model: payment,
              include: [{
                  model: event
              }]
          }]
      }).then(payment=>res.send(payment))
  }

  exports.index = (req, res) => {
    Users.findAll({
          include: [{
              model: payment,
              include: [{
                  model: event
              }]
          }]
      }).then(payment=>res.send(payment))
  }

  exports.confirmed = (req, res) => {
    Users.findOne({
        where: {id: req.params.id},
          include: [{
              model: payment,
              include: [{
                model: event
            }]
          }]
      }).then(data=>res.send(data))
  }
