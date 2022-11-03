const mongoose = require("../config/mongoose.config.js");

const userSchema = new mongoose.Schema({
    uuid: String, // TODO: make UUID
    first_name: String,
    last_name: String,
    email: String, // TODO: Validate email
    is_admin: Boolean
})

module.exports = mongoose.model("User", userSchema)