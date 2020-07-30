const {Schema,model} = require('mongoose')

const materialSchema = new Schema({    
    address: {type: String, required: true},
    clientFIO: {type: String, required: true},
    clientTelephone: {type: String, required: true},
    clientTelephoneSpare: {type: String, required: true},//запасной телефон клиента
    status: {type: String, required: true},
    frozeLink: {type: String, required: true}//ссылка на замер
})

module.exports = model('Froze',materialSchema)