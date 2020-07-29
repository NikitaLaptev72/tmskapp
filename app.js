const express = require('express')
const app = express()
const mongoose = require('mongoose')
const app = express()

const port = process.env.PORT || 80

app.get('/', (req, res) => {
    res.end('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
    res.end('<h1>About Page</h1>')
})

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