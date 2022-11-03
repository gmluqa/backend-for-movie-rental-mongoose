const mongoose = require("../config/mongoose.config.js");

const movieSchema = new mongoose.Schema({
    uuid: String, // TODO: make UUID
    name: String,
    rating: Number,
    genre: String
})

module.exports = mongoose.model("Movie", movieSchema)