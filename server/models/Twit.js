const mongoose = require('mongoose');


const twitSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50,
    },
    city: {
        type:String,
    },
    occupation: {
        type: String,
    },

})


const Twit = mongoose.model('Twit', twitSchema);

module.exports = { Twit }