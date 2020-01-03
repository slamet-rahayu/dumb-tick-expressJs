const models = require('../models')
const category = models.category
const Users = models.users
const event = models.event
const payment = models.payment
const favourites = models.favourites

exports.index = (req, res) => {
  favourites.findAll({
        include: [{
            model: Users,
            include: [{
                model: event
            }]
        }]
    }).then(event=>res.send(event))
}

exports.show = (req, res) => {
  Users.findOne({
      where: {id: req.params.id},
        include: [{
            model: favourites,
            include: [{
                model: event
            }]
        }]
    }).then(event=>res.send(event))
}

exports.store = (req, res) => {
 favourites.create(req.body)
     .then(event => {
         res.send({
             message:"success",
             event
        })
    })
}

exports.delete = (req,res) => {
    favourites.destroy({where: {event_id: req.body.event_id, user_id: req.body.user_id}})
        .then(event=> {
            res.send({
                message:'success',
                event
            })
        })
}

