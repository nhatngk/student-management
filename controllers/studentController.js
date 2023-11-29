const Students = require("../models/student")

const studentController = {
    getByStudentCode: async (req, res, next) => {
        try {
            const { studentCode } = req.body;
            const student = await Students.findOne({ studentCode });

            if (!student) {
                next({
                    status: 400,
                    message: "Student code doesn't exsist."
                })
            }

            return res.status(200).json(student);
        } catch (error) {
            next({
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
            next({
                status: 500,
                message: error
            })
        }
    },

    addStudent: async (req, res, next) => {
        try {
            const studentInfo = req.body;

            const check = await Students.findOne({ studentCode: studentInfo.studentCode });
            if (check) {
                next({
                    status: 400,
                    message: "Student code already exsists."
                })
            }

            // const student = await Students.create({ ...studentInfo });

            // return res.status(201).json({
            //     message:"Create successfully!",
            //     student
            // });
        } catch (error) {
            next({
                status: 500,
                message: error
            })
        }
    },

    updateByStudentCode: async (req, res, next) => {
        try {
            const studentInfo = req.body;
            const student = await Students.findOneAndUpdate(
                { 
                    studentCode: studentInfo.studentCode 
                },
                {
                    ...studentInfo
                },
                { 
                    new: true 
                }
            );

            if (!student) {
                next({
                    status: 400,
                    message: "Student code doesn't exsist."
                })
            }

            return res.status(200).json({
                message: "Update successfully!",
                student
            });
        } catch (error) {
            next({
                status: 500,
                message: error
            })
        }
    },
    deleteByStudentCode: async (req, res, next) => {
        try {
            const { studentCode } = req.body;
            const student = await Students.findOneAndDelete({ studentCode });

            if (!student) {
                next({
                    status: 400,
                    message: "Student code doesn't exsist."
                })
            }

            return res.status(200).json({
                message: "Delete successfully!"
            });
        } catch (error) {
            next({
                status: 500,
                message: error
            })
        }
    },
}

module.exports = studentController;