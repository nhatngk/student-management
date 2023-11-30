const jwt = require("jsonwebtoken");
const Users = require("../models/user");
const ObjectId = require("mongoose").Types.ObjectId;

const decode = (req) => {
    try {
      const bearerHeader = req.headers["authorization"];
  
      if (bearerHeader) {
        const token = bearerHeader.split(" ")[1];
  
        return jwt.verify(
          token,
          "SECRET_KEY"
        );
      }
  
      return false;
    } catch {
      return false;
    }
  };
  
  const verifyToken = async (req, res, next) => {
    const decodedToken = decode(req);
  
    if (!decodedToken) next({
            status: 401,
            message: "Unauthorized!"
        })
  
    const userId = decodedToken.userId;
  
    if (!ObjectId.isValid(userId)) next({
        status: 401,
        message: "Unauthorized!"
    })
  
    const user = await Users.findById(userId);
  
    if(!user) next({
        status: 401,
        message: "Unauthorized!"
    })
  
    next();
  }  

module.exports = verifyToken;