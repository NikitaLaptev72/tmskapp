const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors({credentials: true, origin: true}))

const port = process.env.PORT || 80

app.use(express.json({ extended: true }))
app.use('/api/auths', require('./routes/auths.routes'))
app.use('/api/materials', require('./routes/materials.routes'))
app.use('/api/frozes', require('./routes/frozes.routes'))
app.use('/api/clients', require('./routes/clients.routes'))
app.use('/api/orders', require('./routes/orders.routes'))

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.listen(port, () => {
    console.log('Server has been started...')
})


// async function start()
// {
//     try {
//         await mongoose.connect(config.get('mongoUri'), {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true
//         })
//         app.listen(port, () => console.log('Server has been started on port ${PORT}'))
//     } catch (e) {
//         console.log('Server Error', e.message)
//         process.exit(1)
//     }
// }

// start()