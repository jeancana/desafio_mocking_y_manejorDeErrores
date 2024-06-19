
// *** CAPA INTERMEDIA DE SERVICIO DEL MVC  ***

// Separa La Capa Controllers y La Capa Model

//MANEJA PERSISTENCIA DE ARCHIVOS EN MongoDB 
import usersModel from '../models/users.model.js'


// 1) Servicios para: 
const createUser = async (data) => {

    console.log("pase por el Servicio - createUser")
    return await usersModel.create(data)

}


// 1) Servicios para: 
const findUserByEmail = async (data) => {

    console.log("pase por el Servicio - findUserByEmail")
    return await usersModel.findOne(data)

}

// 2) Servicios para:
const getAllUsers = async () => {

    console.log("pase por el Servicio - getAllUsers")
    return await usersModel.find().lean() 

}


// 3) Servicios para:
const getUserById = async (id) => {

    console.log(id)

    console.log("pase por el Servicio - getUserById")
    return await usersModel.findById(id)

}


// 4) Servicios para:
const updateUser = async (id, newContent) => {

    console.log("pase por el Servicio - updateUser")
    return await usersModel.findByIdAndUpdate(id, newContent)

}


// 5) Servicios para:
const deleteUserById = async (id) => {

    console.log("pase por el Servicio - deleteUser")
    return await usersModel.findByIdAndDelete(id)

}


// Exportando todos Los Servicios por Defecto
export default {

    createUser,
    findUserByEmail,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUserById

 
};