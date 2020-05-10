const express = require('express');
const router = new express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const Video = require('../models/Video');


//get song https://www.googleapis.com/youtube/v3/channels

// chanelId = UC-UNeY1c9yozCwsUHyqBIbw
// apiKey = 
// playlist item - https://www.googleapis.com/youtube/v3/playlistItems
// AIzaSyCJv2eNDsq-OZk1iD2QF4F-cyTQGORrii4

// @route    GET   api/playlist
// @desc     Get logged in user
// @access   Private
router.get('/',auth, async(req,res)=>{
    try{
        const videos = await Video.find({user: req.user.id}).sort({date: -1});
        res.json(videos);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server errror');
    }
});

// @route    POST   api/auth
// @desc     Add new playlist
// @access   Private
router.post('/',auth, async(req,res)=>{
    const {videoId,title} = req.body;
    var newVideo= {
        videoId:videoId,
        title,title
    };
    
    var userId = await User.findOne({email: req.user.email}) 
    userId.videos.push(newVideo);
    try{
        await userId.save();
        console.log(userId);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

});

router.post('/delete',auth,async(req,res)=>{
    try{
        var user = await User.findById({_id:req.body.u_id});
        var newVideos = user.videos.filter(v => v._id != req.body.v_id);
        console.log(newVideos);
        user.videos = [];
        user.videos = newVideos;

        await user.save();
        console.log(user);
        res.status(200).json(newVideos);
    }catch(error){
        console.error(error);
        res.status(500).send('Server Error');
    }    
});



module.exports = router;