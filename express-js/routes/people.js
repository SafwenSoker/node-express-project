const express = require('express');
const { random } = require('lodash');
const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people')
const router = express.Router()
router.get('/', getPeople)
router.post('/', createPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router