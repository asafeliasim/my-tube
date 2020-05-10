const express = require('express');
const auth = require('../middleware/auth');
const{check,validationResult} = require('express-validator');
const router = new express.Router();
const bcrypt = require('bcryptjs');
var config = require('config');
var jwt = require('jsonwebtoken');
const User = require('../models/User');
// @route    GET   api/auth
// @desc     Get logged in user
// @access   Private
router.get('/',auth, async(req,res)=>{
    
    try{
        const user = await User.findOne({email: req.user.email}).select('-password');
        console.log(user);
        res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error!');
    }
});

// @route    POST   api/auth
// @desc     Add user && get user
// @access   Public
router.post('/',[
    check('email','Please include a valid email').isEmail(),
    check('password','Password is required').exists()
],
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email,password} = req.body;

    try{
        var user = await User.findOne({email:email});
        if(!user){
            return res.status(400).json({msg:'Invalid Credentials'});
        }
        
        var isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:'Invalid Credentials'});
        }

        const payload = {
            user: {
                email: user.email
            }
        };
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn: 360000,
            },
            (error,token)=>{
                if(error) throw error;
                res.json({token});
            }
        );
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;