require('express-group-routes')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')

const UserController = require('./controller/users')
const CategoryController = require('./controller/category')
const EventController = require('./controller/event')
const PaymentController = require('./controller/payment')
const AuthController = require('./controller/auth')
const FavController = require('./controller/favourites')

const cors = require('cors')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res) => {
    res.send(`youre on port ${port}`)
})

app.group('/api/v1', (router) => {
    //routing for home
    router.get('/events', EventController.index)
    router.get('/today', EventController.today)
    //route for category
    router.get('/categories', CategoryController.index)
    router.get('/categories/:id', CategoryController.show)
    router.post('/categories', CategoryController.store)
    //route for event
    router.get('/eventdetail/:id', EventController.detail)
    router.get('/myticket/:id/', EventController.myticket)
    router.post('/storeevent', EventController.store)
    router.post('/events', EventController.index)
    //route for user register and login
    router.post('/register', AuthController.register)
    router.post('/login', AuthController.login)
    //routing for users
    router.get('/user', UserController.index)
    router.get('/user/:id', UserController.show)
    router.patch('/user/:id', UserController.update)
    //routing for favourites
    router.get('/favourites', FavController.index)
    router.get('/favourites/:id', FavController.show)
    router.post('/addfav', FavController.store)
    router.post('/deletefav', FavController.delete)
    //routing for payments
    router.post('/payments', PaymentController.store)
    router.get('/payments', PaymentController.index)
    router.get('/payments/:id', PaymentController.show)
    router.get('/confirmed/:id', PaymentController.confirmed)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))