const express = require('express');
const router = new express.Router();


// @route    GET   api/auth
// @desc     Get logged in user
// @access   Private
router.get('/',(req,res)=>{
    res.send('Get logged user');
});

// @route    POST   api/auth
// @desc     Add user && get user
// @access   Public
router.post('/',(req,res)=>{
    res.send('Create new user');
});



module.exports = router;