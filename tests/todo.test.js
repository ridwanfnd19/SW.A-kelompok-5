const app = require('./server')
const request = require('supertest')

let token = ''

describe('Todo test', () => {
    test('Login', async () => {
        const res = await request(app).post('/api/login').send({
            "email": "Rini@gmail.com",
            "password" : "Rini12345"
        })

        expect(res.statusCode).toBe(200)
        token = res.body.data.accessToken
    })

    test('Get List', async () => {
        const res = await request(app).get('/api/todo')
        .set('x-access-token', `${token}`)

        expect(res.statusCode).toBe(200)
    })

    test('Add todo in', async () => {
        const res = await request(app).post('/api/todo/in')
        .set('x-access-token', `${token}`)
        .send({
            "nominal" : 10000,
            "description" : "dari andi"
        })

        expect(res.statusCode).toBe(201)
    })

    test('Add todo out', async () => {
        const res = await request(app).post('/api/todo/out')
        .set('x-access-token', `${token}`)
        .send({
            "nominal" : 5000,
            "description" : "beli eskrim"
        })

        expect(res.statusCode).toBe(202)
    })
})