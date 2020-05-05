const express = require('express');
const router = new express.Router();


// @route    GET   api/playlist
// @desc     Get logged in user
// @access   Private
router.get('/',(req,res)=>{
    res.send('Get all playlist');
});

// @route    POST   api/auth
// @desc     Add new playlist
// @access   Private
router.post('/',(req,res)=>{
    res.send('Add playlist');
});



module.exports = router;