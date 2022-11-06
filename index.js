const { PrismaClient } = require('@prisma/client');
const bcrypt= require('bcrypt')

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: 'Rangga',
            email: 'rangga@gmail.com',
            password: bcrypt.hashSync('Rangga12345', 10),
            todo: {
            }
        },
    }),

    await prisma.user.create({
        data: {
            name: 'Rini',
            email: 'Rini@gmail.com',
            password: bcrypt.hashSync('Rini12345', 10),
            todo: {
            }
        },
    })

    await prisma.user.create({
        data: {
            name: 'Surya',
            email: 'Surya@gmail.com',
            password: bcrypt.hashSync('Surya12345', 10),
            todo: {
            }
        },
    })

    const allUsers = await prisma.user.findMany()

    console.dir(allUsers, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
