const app = require('./app')

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log(`Running on localhost:${PORT}, \nWelcome to the comfy zone! 😎`))