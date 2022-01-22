const express = require('express')
const app = express()
let { people } = require('./data')
app.use(express.static("./methods-public"))
app.use(express.urlencoded({ extended: false }))
app.get('/api/people', (req, res) => {
    console.log(people.sort((a, b) => { return b.id - a.id }));
    res.status(200).json({ success: true, data: people })
})
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => { person.id === Number(id) })

    if (!person) {
        return res.status(404).send(`No person with id ${id}`)
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
    })
    return res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => { person.id === Number(id) })

    if (!person) {
        return res.status(404).send(`No person with id ${id}`)
    }
    const newPeople = people.filter((person) => person.id != Number(id))
    return res.status(200).json({ success: true, data: newPeople })
})
app.listen(5000)