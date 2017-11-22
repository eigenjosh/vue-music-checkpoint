var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new Schema({
    name: { type: String, required: true },
    id: {type: String}
})


module.exports = mongoose.model('Playlist', schema)