const {Schema,model} = require('mongoose')

const orderSchema = new Schema({
    address: {type: String, required: true},//адрес заказа
    clientId: {type: String, required: true},//ID клиента
    status: {type: String, required: true},//статус заказа
    orderLink: {type: String, required: true}//ссылка на чек заказа
    
})

module.exports = model('Order',orderSchema)