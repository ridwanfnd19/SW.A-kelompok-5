const jwt = require("jsonwebtoken");

const userSession = async (req, res, next) => {
    let token
  
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        if (user) {
          req.user = {
            id: user[0].id,
            username: user[0].username,
          }
          next()
        } 
        
        else {
          res.status(401).send({ message: 'Not authorized' })
        }
    }

    if (!token) {
        return res.status(401).send("Access denied")
    }

    if (!token) {
        return res.status(403).send({message: "No token provided!"
        });
      }
}


module.exports = verifyToken
