var cors = require('cors')
var express = require('express')
var server = express()
var bp = require('body-parser')
var port = 3000
// var DBConnect = require('./config/mlab.js')

// routes
var songRoutes = require('./routes/song-routes')
var playlistRoutes = require('./routes/playlist-routes')
//middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))

// register routes
server.use(songRoutes)
server.use(playlistRoutes)

//get mytunes (GET)

//add song to playlist (POST)

//update ranking (PUT)

//remove from playlist (DELETE)

server.listen(port, () => {
    console.log('Server running on port:', port)
})