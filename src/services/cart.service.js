
// *** CAPA INTERMEDIA DE SERVICIO DEL MVC  ***

// Separa La Capa Controllers y La Capa Model

//MANEJA PERSISTENCIA DE ARCHIVOS EN MongoDB 

import Cart from '../models/Cart.model.js'

// 1) Servicios para: 
const createCart = async (newCart) => {

    console.log("pase por el Servicio - createCart")
    return await Cart.create(newCart)

}


// 2) Servicios para:
const getCart = async () => {

    console.log("pase por el Servicio - getCart")
    return await Cart.find().lean()

}


// 3) Servicios para:
const getCartById = async (id) => {

    console.log("pase por el Servicio - getCartById")
    //return  null
    return await Cart.findById(id) 
}


// 4) Servicios para:
const updateCart = async (id, newContent) => {

    console.log("pase por el Servicio - updateProduct")
    return await Cart.findByIdAndUpdate(id, newContent).lean()

}



// Exportando todos Los Servicios por Defecto
export default {

    createCart,
    getCart,
    getCartById,
    updateCart
    
};