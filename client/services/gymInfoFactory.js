app.factory('gymInfoFactory', function($http, $location){
    var factory = [];
    factory.gyms = [];
    factory.session = [];



    factory.searchGym = function(gymID, callback){
        console.log(gymID._id)
        $http.get('/gym/' + gymID._id).success(function(output){
            factory.gyms = output
            callback(factory.gyms)
        })
    }

    factory.makeReview = function(comment, gymID){
        console.log(comment);
        $http.get('/gym/review/' + gymID, comment).success(function(output){
            console.log(output);
        })
    }
    console.log('factory working')
    return factory
})
