const express = require("express")
const app = express()
const port = 4747

const data = [];

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.post("/", (req, res) => {

    const item = req.body.data

    data.push(item)

    const arrayItems = {
        items: data
    }

    res.send(arrayItems);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})