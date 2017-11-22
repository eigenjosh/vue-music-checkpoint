let router = require('express').Router()
let Songs = require('../models/song')
let Playlists = require('../models/playlist')

router.get('/api/playlists', (req, res, next) => {
    Playlists.find({})
        .then(playlists => {
            res.send(playlists)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

module.exports = router