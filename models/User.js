const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now
    },
    videos:[ {
        videoId: String,
        title: String
    }]
});

module.exports = mongoose.model('user',UserSchema);