var mongoose = require('mongoose');

var gymSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    days: {type: Array, required: true},
    timeStart: {type: Date, required: true},
    timeEnd: {type: Date, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    sport: {type: String, required: true},
    image_url: {type: String},
    ///////////////////////////////
    rating: {type: Number},
    cost: {type: Number},
    level: {type: Number},
    membership: {type: Boolean},
    gender: {type: String},
    _user: {type: mongoose.Schema.Types.ObjectId, ref:'users'},
    _reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'reviews'}]
	}, {timestamps: true})

mongoose.model('gyms', gymSchema);
