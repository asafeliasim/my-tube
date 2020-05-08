const express = require('express');
const router = new express.Router();
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

/* User router using google auth */
/* using express-validation to check valid input*/

const User = require('../models/User');

// @route    POST   api/users
// @desc     Register a user
// @access   Public
router.post(
    '/',
    [
    check('name','Please add name')
    .not()
    .isEmpty(),
    
    check('email','Please include a valid email').isEmail(),
    check(
        'password','Please enter a password with 6 or more charaters'
        ).isLength({min:6})

],
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {name,email,password} = req.body;

    try{
        var user = await User.findOne({email:email});
        
        if(user){
            return res.status(400).json({msg:'User already exists'});
        }

        user = new User({
            name:name,
            email:email,
            password:password
        });
        
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();
        console.log(user);
        const payload = {
            user:{
                email: user.email
            }
        };
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn: 36000
            },
            (err,token)=> {
                if(err) throw err;
                res.json({token});
            }
        );
    }catch(err){
        console.error(err.message);
        res.status(500).send('server error!!');
    }
});




module.exports = router;