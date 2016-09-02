console.log('UserController')
var mongoose = require('mongoose')
var bcrypt   = require('bcrypt-nodejs');
var User = mongoose.model('users');

function UserController(){

    this.createUser = function(req, res){
        console.log(req.body)
        User.find({email: req.body.email}, function(err, user){
            if(err){
                console.log(err);
            } else {
                if(user){
                    res.json({ status: false, message: 'Sorry, that email is already registered'})
                }
                var newUser = new User({
                    username: req.body.username,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null),
                    birthday: req.body.birthday,
                    gender: req.body.gender
                });
                newUser.save(function(err, results){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("sucess", results)
                        res.json({status: true, message: "Thank you for registering " + req.body.first_name })
                    }
                })

            }

        })


    }

}


module.exports = new UserController();
