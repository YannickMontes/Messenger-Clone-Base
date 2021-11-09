const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({

}, { minimize: false });

module.exports = mongoose.model('Message', messageSchema);
