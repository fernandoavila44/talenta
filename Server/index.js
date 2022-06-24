const express = require('express')
const app = express()
const port = 4747
const bodyParser = require('body-parser');


const data = [];

app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {

})

app.post('/', (req, res) => {

    const item = req.body;


    console.log(req)
    console.log('data',item)

    res.send('data recibida')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})