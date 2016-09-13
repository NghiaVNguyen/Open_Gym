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

    console.log('factory working')
    return factory
})
