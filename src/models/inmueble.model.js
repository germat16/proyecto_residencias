const mongoose = require('../database/connect.mongo')

const inmuebleSchema = {

}

const inmuebleModel = mongoose.model('inmueble',inmuebleSchema)

module.exports = {inmuebleModel}

