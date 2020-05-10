var mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    videoId: {
        type: String,
    },
    title: {
        type: String
    },
    favorite:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('videos',VideoSchema);