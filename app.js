const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 4000
const dinos = require('./dinos.js')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json(dinos)
})

app.post('/', (req, res) => {
    res.status(404).send('I dont think so')
})

app.get('/:id', (req, res) => {
    res.status(404).send('No no no, get all of the dinos')
})

app.delete('/:id', (req, res) => {
    res.status(404).send('Why you trying to delete the dinos?')
})

app.put('/:id', (req, res) => {
    res.status(404).send('Why you tryna update these jobs? Thats my job!')
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})