const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27017/testhousingdb')

module.exports = mongoose