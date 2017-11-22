let router = require('express').Router()
let Playlists = require('../models/playlist')
let Songs = require('../models/song')

router.get('/api/songs', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

module.exports = router