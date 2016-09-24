var mongoose = require('mongoose');

var searchSchema = new mongoose.Schema({
    name: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    sport: {type: String},
    image_url: {type: String},
    ///////////////////////////////
    rating: {type: Number},
    cost: {type: Number},
    level: {type: Number},
    membership: {type: Boolean},
    gender: {type: String},
	}, {timestamps: true})

mongoose.model('searchFilter', searchSchema);
