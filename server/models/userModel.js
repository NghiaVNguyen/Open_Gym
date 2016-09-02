var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type:String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    birthday: {type: Date},
    gender: {type: String},
    _reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'reviews'}],
    _gyms: [{type: mongoose.Schema.Types.ObjectId, ref: 'gyms'}]
	}, {timestamps: true})

mongoose.model('users', userSchema);
