const jwt = require("jsonwebtoken");
const Users = require("../models/user");

const authController = {
    login: async (req, res, next) => {
        try {
            const { username, password } = req.body;

            const user = await Users.findOne({ username });

            if (!user) {
                next({
                    status: 400,
                    message: "Username or password is incorrect!"
                })
            }

            if (password !== user.password) {
                next({
                    status: 400,
                    message: "Username or password is incorrect!"
                })
            }

            const token = jwt.sign({ userID: user._id }, "SECRET_KEY", { expiresIn: "1h" });

            return res.status(200).json({
                message: "Login successfully!",
                token
            })
        }

        catch (error) {
            next({
                status: 500,
                message: error
            })
        }
    }
}

module.exports = authController;