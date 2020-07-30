const {Schema,model} = require('mongoose')

const frozeSchema = new Schema({    
    address: {type: String, required: true},//адрес замера
    clientId: {type: String, required: true},//ID клиента
    status: {type: String, required: true},//статус замера
    frozeLink: {type: String, required: true}//ссылка на замер
})

module.exports = model('Froze',frozeSchema)