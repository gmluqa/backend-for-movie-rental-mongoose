const mongoose = require("../config/mongoose.config.js");

const rentalSchema = new mongoose.Schema({
    uuid: String, // TODO: make UUID
    items: Array
})

module.exports = mongoose.model("Rental", rentalSchema)