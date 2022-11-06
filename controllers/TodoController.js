const m$auth = require('../modules/todo.modules')
const { Router } = require('express')
const respose = require('../helpers/respose')
const verifyToken = require('../middleware/authJwt')

const TodoController = Router()

TodoController.get('/', verifyToken, async (req, res) => {
    const login = await m$auth.getList(req)

    respose.sendResponse(res, login)
})

TodoController.post('/in', verifyToken, async (req, res) => {
    const login = await m$auth.createTodoIn(req)

    respose.sendResponse(res, login)
})

TodoController.post('/out', verifyToken, async (req, res) => {
    const login = await m$auth.createTodoOut(req)

    respose.sendResponse(res, login)
})

module.exports = TodoController