var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new mongoose.Schema({
    artist: { type: String, required: true },
    title: { type: String, required: true },
    album: { type: String, required: true },
    albumArt: { type: String },
    releaseDate: { type: String },
    promote: {type: Number, default: 0}
})

module.exports = mongoose.model('Song', schema)