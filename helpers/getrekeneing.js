const prisma = require('../helpers/database')

getRekening = async (id) => {
    try {
        const data = await prisma.rekening.findFirst({
            where: {
                userId: id
            }
        })

        return data
    } catch (error) {
        console.log("GetData Rek helpers Error:", error)

        return {
            status: false,
            error
        }
    }
}

module.exports = getRekening