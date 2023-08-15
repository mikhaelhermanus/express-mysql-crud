require('dotenv').config()
const PORT = process.env.PORT || 4000;

const express = require('express')

const usersRoutes = require('./routes/users.js')

const middlewareLogRequest = require('./middleware/logs.js');

const app = express()

// app.method(path, handler) ==> default routing pada express.js
// app.use('/', (req, res, )=>{
//     res.send('Hello World')
// })


//implementasi middleware untuk melakukan initial action everytime we request
// app.use((req, res, next)=>{
//     console.log('log terjadi request ke API ini');
//     next()
// })

app.use(middlewareLogRequest);
app.use(express.json()); //middleware untuk mengizinkan request berupa json

app.use('/users', usersRoutes )

// app.get('/', (req, res)=>{
//     res.send('hello get method')
// })

app.listen(PORT, ()=>{
    console.log(`Server berhasil di running di port ${PORT}`)
});