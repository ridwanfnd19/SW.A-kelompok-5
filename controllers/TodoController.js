const m$auth = require('../modules/todo.modules')
const { Router } = require('express')
const respose = require('../helpers/respose')

const TodoController = Router()

TodoController.post('', async (req, res) => {
    const login = await m$auth.login(req.body, res)

    respose.sendResponse(res, login)
})

TodoController.post('/in', async (req, res) => {
    const login = await m$auth.login(req.body, res)

    respose.sendResponse(res, login)
})

TodoController.post('/out', async (req, res) => {
    const login = await m$auth.login(req.body, res)

    respose.sendResponse(res, login)
})

module.exports = TodoController