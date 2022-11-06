const prisma = require('../helpers/database')
const joi = require('joi')
const getRek = require('../helpers/getrekeneing')

class _todo {
    getData = async(req) => {
        try {
            const data = await getRek(req.id)

            return {
                status: 'true',
                code: 200,
                data: data
            }
        } catch (error) {
            console.log("GetData todo module Error:", error)

            return {
                status: false,
                error
            }
        }
    }

    createTodoIn = async(req) => {
        try {
            const schema = joi.object({
                nominal: joi.number().positive().required(),
                description: joi.string(),
                userId: joi.any().forbidden(),
                tipe: joi.any().forbidden(),
                created_at: joi.any().forbidden(),
            }).options({ abortEarly: false })

            const validation = schema.validate(req.body)

            if (validation.error) {
                const errorDetails = validation.error.details.map(detail => detail.message)

                return {
                    status: false,
                    code: 422,
                    error: errorDetails.join(', ')
                }
            }

            const add = await prisma.todo.create({
                data: {
                    nominal : req.body.nominal, 
                    description: req.body.description,
                    tipe : 'pemasukan',
                    userId: req.id
                }
            })


            // ambil nilai saldo
            const saldo = await getRek(req.id)

            // set ke rekenening
            await prisma.rekening.update({
                where: {
                    userId: req.id
                },
                data : {
                    uang: Number(saldo.uang) + Number(req.body.nominal)
                }
            })

            return {
                status: 'true',
                code: 201,
                data: add
            }
        } catch (error) {
            console.log("Create todo in module Error:", error)

            return {
                status: false,
                code: 401,
                error
            }
        }
    }

    createTodoOut = async () => {
        try {
            
        } catch (error) {
            console.log("Create todo out module Error:", error)

            return {
                status: false,
                code: 402,
                error
            }
        }
    }
}

module.exports = new _todo()