const models = require('../models')
const category = models.category
const Users = models.users
const event = models.event
const payment = models.payment

exports.index = (req, res) => {
    Users.findAll({
        // include: [{
        //     model: event
        // }],
        // order: [
        //     [users, 'id', 'DESC']
        // ]
    }).then(data=> res.send(data))
}

exports.show = (req, res) => {
    Users.findOne({
        where: {id: req.params.id}
    }).then(user=> res.send(user))
}

exports.register = (req, res) => {
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        phone: req.body.phone,
        image: req.body.image,
        password: req.body.password
    }
    Users.findOne({
        where: {
            email: req.body.email
        }
    }).then(user=> {
        if(!user) {
                users.create({
                    phone: req.body.phone
                })
                .then(user => {
                    res.json({status: user.email + 'registered'})
                    res.send(user)
                }).catch(err => {
                    res.send('error:' + err)
              })
            
        }else{
            res.json({error: 'User already registered'})
        }
    }).catch(err=> {
        res.send('error:' + err)
    })
}

exports.update = (req,res) => {
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        phone: req.body.phone,
        image: req.body.image,
        password: req.body.password
    }
    Users.update(
        userData, {where: {id: req.params.id}}
    ).then(user=> {
        res.send({
            message: "success",
            user
        })
    })
}