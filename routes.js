const AuthController = require("./controllers/AuthController")
const TodoController = require("./controllers/TodoController")

const _routes = [
    ['', AuthController],
    ['todo', TodoController]
]

const routes = (app) => {
    _routes.forEach(route => {
        const [url, controller] = route

        app.use(`/api/${url}`, controller)
    })
}

module.exports = routes 