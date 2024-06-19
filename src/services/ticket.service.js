
// *** CAPA INTERMEDIA DE SERVICIO DEL MVC  ***

// Separa La Capa Controllers y La Capa Model

//MANEJA PERSISTENCIA DE ARCHIVOS EN MongoDB 
import ticketModel from '../models/Ticket.model.js'


// 1) Servicios para: 
const createTicket = async (message) => {

    console.log("pase por el Servicio - createTicket")
    return await ticketModel.create(message)
}



// 2) Servicios para:
const getAllTickets = async () => {

    console.log("pase por el Servicio - getAllTickets")
    return await ticketModel.find().lean() 

}


// 2) Servicios para:
const getTicketByCode = async (code, purchaser) => {

    console.log('purchaser', purchaser)

    console.log("pase por el Servicio - getTicketByCode")
    return await ticketModel.findById({ _id: code }).exec()

}

const getTicketsByEmail = async (email) => {
    console.log("pase por el Servicio - getTicketsByEmail")
    return await ticketModel.find({ purchaser: email }, null, { sort: 'purchase_datetime' }).exec()
}



// Exportando todos Los Servicios por Defecto
export default {

    createTicket,
    getAllTickets,
    getTicketByCode,
    getTicketsByEmail,
    
};