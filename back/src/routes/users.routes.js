const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

// Controller
const usersController = new UsersController()

// Rotas
usersRoutes.post('/create', usersController.create)
usersRoutes.get('/show', usersController.show)
usersRoutes.delete('/delete/:id', usersController.delete)
//usersRoutes.delete('/delete', usersController.delete)
usersRoutes.put('/update/id', usersController.update)

// Exporta
module.exports = usersRoutes