const mongoose = require('mongoose');


const twitSchema = mongoose.Schema({
    twit: {
        type:String,
        maxlength:50,
    },
    email: {
        type: String,
    },
    username: {
        type: String,
    },

})


const Twit = mongoose.model('Twit', twitSchema);

module.exports = { Twit }