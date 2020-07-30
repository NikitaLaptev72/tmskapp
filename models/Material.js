const {Schema,model} = require('mongoose')

const materialSchema = new Schema({
    name: {type: String, required: true},//наименование материала
    pictureLink: {type: String, required: true},//ссылка на изображение
    purchasePrice: {type: String, required: true},//цена закупки
    sellingPrice: {type: String, required: true},//цена продажи
    size: {type: String, required: true},//размер
    description: {type: String, required: true},//описание
    checkLink: {type: String, required: true}//ссылка на чек
})

module.exports = model('Material',materialSchema)