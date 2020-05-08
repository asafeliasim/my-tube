const express = require('express');
const router = new express.Router();



//get song https://www.googleapis.com/youtube/v3/channels

// chanelId = UC-UNeY1c9yozCwsUHyqBIbw
// apiKey = 
// playlist item - https://www.googleapis.com/youtube/v3/playlistItems
// AIzaSyCJv2eNDsq-OZk1iD2QF4F-cyTQGORrii4
// @route    GET   api/playlist
// @desc     Get logged in user
// @access   Private
router.get('https://www.googleapis.com/youtube/v3/channels',(req,res)=>{
    
});

// @route    POST   api/auth
// @desc     Add new playlist
// @access   Private
router.post('/',(req,res)=>{
    res.send('Add playlist');
});



module.exports = router;