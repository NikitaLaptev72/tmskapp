const {Schema,model} = require('mongoose')

const clientSchema = new Schema({    
    clientFIO: {type: String, required: true},//фио клиента
    clientTelephone: {type: String, required: true},//телефон клиента
    clientTelephoneSpare: {type: String, required: true},//запасной телефон клиента
})

module.exports = model('Client',clientSchema)