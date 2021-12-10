const express = require('express')

const ProductController = require('../controllers/ProductController')

const routes = express.Router()

// testes

routes.get('/produto', ProductController.index)

/*// Autenticação

routes.post('/usuario', UserController.index)

// Listas

routes.get('/usuarios', UsersController.index)
routes.get('/produtos', UsersController.index)
routes.get('/pedidos', UsersController.index)

// Cadastro

routes.post('/produto/registrar', UserController.store)
routes.post('/pedido/registrar', PostsController.store)

// Editar

routes.post('/produto/editar', PostsController.edit)
routes.post('/pedido/editar', UserController.edit)*/

module.exports = routes