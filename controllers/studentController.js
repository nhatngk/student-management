const Students = require("../models/student")

const studentController = {
    getByStudentCode: async (req, res, next) => {
        try {
            const studentCode = req.params.studentCode;

            const student = await Students.findOne({ studentCode });

            if (!student) {
                return next({
                    status: 400,
                    message: "Student doesn't exsist."
                })
            }

            return res.status(200).json(student);
        } catch (error) {
            return next({
                status: 500,
                message: error
            })
        }
    },

    getAllStudent: async (req, res, next) => {
        try {
            const students = await Students.find();

            return res.status(200).json(students);
        } catch (error) {
            return next({
                status: 500,
                message: error
            })
        }
    },

    addStudent: async (req, res, next) => {
        try {
            const { studentCode } = req.params;
            const studentInfo = req.body;

            const check = await Students.findOne({ studentCode });

            if (check) {
                return next({
                    status: 400,
                    message: "Student already exsists."
                })
            }

            const student = await Students.create({ studentCode, ...studentInfo });

            return res.status(201).json({
                message: "Create successfully!",
                student
            });
        } catch (error) {
            return next({
                status: 500,
                message: error
            })
        }
    },

    updateByStudentCode: async (req, res, next) => {
        try {
            const { studentCode } = req.params;

            const studentInfo = req.body;

            const student = await Students.findOneAndUpdate(
                {
                    studentCode
                },
                {
                    ...studentInfo
                },
                {
                    new: true
                }
            );

            if (!student) {
                return next({
                    status: 400,
                    message: "Student doesn't exsist."
                })
            }

            return res.status(200).json({
                message: "Update successfully!",
                student
            });

        } catch (error) {
            return next({
                status: 500,
                message: error
            })
        }
    },
    deleteByStudentCode: async (req, res, next) => {
        try {
            const {studentCode} = req.params;
            const student = await Students.findOneAndDelete({ studentCode });

            if (!student) {
                return next({
                    status: 400,
                    message: "Student doesn't exsist."
                })
            }

            return res.status(200).json({
                message: "Delete successfully!"
            });
        } catch (error) {
            return next({
                status: 500,
                message: error
            })
        }
    },
}

module.exports = studentController;