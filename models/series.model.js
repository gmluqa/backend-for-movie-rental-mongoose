const mongoose = require("../config/mongoose.config.js");

const seriesSchema = new mongoose.Schema({
    uuid: String, // TODO: make UUID
    name: String,
    rating: Number,
    genre: String,
    next_ep_date: Date,
    has_movie_pass: Boolean
})

module.exports = mongoose.model("Series", seriesSchema)