console.log('friendController')
var mongoose = require('mongoose')

var Gym = mongoose.model('gyms');

function GymController(){
    this.search = function(req,res){

    var findObj = {
        city : req.body.city,
        sport : req.body.sport
    };

    if(req.body.level) {
        findObj.level = {
            $gte: req.body.level
        }
    };
    if(req.body.cost) {
        findObj.cost = {
            $lte: req.body.cost
        }
    }
    if(req.body.rating) {
        findObj.rating = {
            $gte: req.body.rating
        }
    }


    Gym.find(findObj, function(err, results){
        if(err){
            console.log("error in search query",err)
        } else {
            res.json({gymResults: results })
        }
    })

    }

  this.createGym = function(req,res){
      console.log(req.body, 'my req.body')
        var newGym = new Gym({
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            days: req.body.day,
            timeStart: req.body.timeStart,
            timeEnd: req.body.timeEnd,
            sport: req.body.sport,
            level: req.body.level,
            image_url: req.body.image_url
        });
        console.log(newGym)
        newGym.save(function(err, Gym){
            console.log("******")
            if(err){
                console.log('error while saving')
                console.log(err)
            } else {
                console.log('redirecting to gym')
                res.json({Gym: Gym})
            }
        })
  };

  this.searchOne = function(req,res){
      console.log(req.params.id)
      Gym.findOne({_id: req.params.id}, function(err, gymOne){
          if(err){
              console.log(err);
          } else {
              res.json({Gym: gymOne})
          }
      })
  }


}


module.exports = new GymController();
