const usersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers() //destructuring format (rows , field)

        res.json({
            message: 'GET all users success',
            data
        })
    } catch (error) {
        res.json({
            message: 'Server Error',
            error
        })
    }

}

const createNewUsers = async (req, res) => {
    const { body } = req;

    if(!body.name || !body.email || !body.address){
        return res.status(400).json({
            message : 'missing property, check your payload',
            data : null
        })
    }

    try {
        await usersModel.createNewUser(body);
        res.status(201).json({
            message: 'Create New users success',
            data: body
        })

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error
        })
    }

}

const updateUsers = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await usersModel.updateUser(body, id)
        res.json({
            message: 'UPDATE user success',
            data: {
                id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error
        })
    }

}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await usersModel.deleteUser(id)
        res.json({
            message: 'DELETE user success',
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUser
}