const models = require('../models')
const category = models.category
const users = models.users
const event = models.event
const payment = models.payment

exports.index = (req, res) => {
    category.findAll({
        include: [{
            model: event
        }]
    }).then(cat=>res.send(cat))
}

exports.show = (req, res) => {
    category.findOne({
        where: {id: req.params.id},
        include:  [{
            model: event
        }]
    }).then(cat=> res.send(cat))
}