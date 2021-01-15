const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
router.post('/signup', (req,res,next)=>{
    bcrypt.hash(req.body.password, 10, (err, hash) => {
           if(err){
               return res.status(500).json({error: err})
           } else{
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
       
            });
            user.save()
            .then(result =>{
                res.status(201).json({wiadomosc: 'Stworzono uzytkownika'});
            })
            .catch(err => res.status(500).json({error:err}));
        }
    });
 });
router.delete('/:userId', (req,res,next) =>{
    User.findByIdAndRemove(req.params.userId)
    .then(result =>{
        res.status(200).json({wiadomosc: 'Usunieto uzytkownika', 
        info: result
    });
    })
    .catch(err => res.status(500).json({error:err}))
});

router.post('/login', (req, res, next) =>{
    User.findOne({email: req.body.email})
    .then(user => {
        if(!user){
            res.status(401).json({wiadomosc: 'Brak autoryzacji'});
        }
        bcrypt.compare(req.body.password, user.password)
         .then(result => {
             if(result ){
                const token = jwt.sign({
                     email: user.email,
                     userId: user._id
                 }, 
                 process.env.hasloJWT, 
                 {
                     expiresIn: '1h'
                 }
                 );
                res.status(200).json({
                    wiadomosc: 'Zalogowano użytkownika',
                    token: token
                });
             }
             else{
                res.status(401).json({wiadomosc: 'Brak autoryzacji'});
             }
         })
         .catch(err => res.status(500).json({error:err}));
    })
    .catch(err => res.status(500).json({error:err}));
});
module.exports= router;