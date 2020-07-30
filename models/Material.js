const {Schema,model} = require('mongoose')

const materialSchema = new Schema({
    name: {type: String, required: true},
    pictureLink: {type: String, required: true},
    purchasePrice: {type: String, required: true},
    sellingPrice: {type: String, required: true},
    size: {type: String, required: true},
    description: {type: String, required: true},
    checkLink: {type: String, required: true}//ссылка на чек
})

module.exports = model('Material',materialSchema)