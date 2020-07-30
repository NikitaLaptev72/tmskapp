const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true, enum: ["admin", "manager"]}    
})

module.exports = model('Auth', userSchema)