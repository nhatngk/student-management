const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");

const app = express();

mongoose.connect("mongodb+srv://admin:admin@cluster0.udrzxyb.mongodb.net/", {
})
.then(() => {
    console.log("Connect to DB successfully.");
})
.catch((error) => {
    console.log(error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/", router);
app.use((err, req, res, next) => {
    if (!err.status || !err.message) {
        return res.status(500).json({ 
            message: "Something wrongs!"
         });
    }
    return res.status(err.status).json({ 
        message: err.message 
    });
})
app.listen(8080, () => {
    console.log("Server is running on port 8080");
})
