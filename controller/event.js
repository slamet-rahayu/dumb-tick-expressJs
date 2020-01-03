const models = require('../models')
const category = models.category
const users = models.users
const event = models.event
const payment = models.payment

exports.index = (req, res) => {
    event.findAll({
        include: [{
            model: category
        }],
            // include: [{
            //     model: users
            // }]
    }).then(event=>res.send(event))
}

exports.today = (req, res) => {
    category.findAll({
        // include: [{
        //     model: event
        // }],
        order: [
            [category, 'id', 'DESC']
        ]
    }).then(data=> res.send(data))
}

exports.detail = (req, res)=> {
    event.findOne({
        where: {id: req.params.id},
        include: [{
            model: category
        }]
    }).then(event=>res.send(event))
}

exports.myticket = (req, res)=> {
    users.findOne({
        where: {id: req.params.id},
        include: [{
            model: event
        }]
    }).then(event=>res.send(event))
}

exports.store = (req, res) => {
    event.create(req.body)
    .then(event => {
        res.send({
            message:"success",
            event
        })
    })
}