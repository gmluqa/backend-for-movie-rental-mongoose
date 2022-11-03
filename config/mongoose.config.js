const mongoose = require('mongoose')
require('dotenv').config()

// DB connection function
const main = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGOHOST}:${process.env.MONGOPORT}`)
            .then(() => { console.log("Connection to DB success") })
    }
    catch (error) {
        console.log(error.message)
    }
}

main()

module.exports = mongoose