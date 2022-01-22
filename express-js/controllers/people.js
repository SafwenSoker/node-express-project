let { people } = require('../data');

const getPeople = (req, res) => {
    console.log(people.sort((a, b) => { return b.id - a.id }));
    res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(401).send('Please enter a name!')
    }
    const newPeople = people.push({ id: random(100), name: name })
    res.status(200).json({ result: success, data: new People })
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((person) => { person.id === Number(id) })

    if (!person) {
        return res.status(404).send(`No person with id ${id}`)
    }
    const newPeople = people.filter((person) => person.id != Number(id))
    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
}