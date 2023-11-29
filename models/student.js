const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentCode: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    birthDay: {
        type: Date,
        required: true
    },
    gender: {
        type: Boolean,
        required: true
    },
    classCode: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Students", studentSchema);