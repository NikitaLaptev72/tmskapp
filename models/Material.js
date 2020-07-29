const {Schema,model} = require('mongoose')

const materialSchema = new Schema({
    name: {type: String, required: true},
    purchasePrice: {type: String, required: true},
    sellingPrice: {type: String, required: true}
})

module.exports = model('Material',materialSchema)