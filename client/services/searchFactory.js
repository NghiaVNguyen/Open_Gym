app.factory('searchFactory', function($http, $location){
    var factory = [];
    factory.gyms = [];
    factory.session = [];

    factory.createGym = function(newGym){
        $http.post('/gym', newGym).success(function(output){
            console.log(output, 'returned new gym object SAVED')
        })
    }

    factory.searchGym = function(searchFilter, callback){
        console.log(searchFilter)
        $http.put('/gym', searchFilter).success(function(output){
            console.log(output, 'search results')
            factory.gyms = output
            callback(factory.gyms)
        })
    }

    factory.searchCriteria = function(){
        $http.get('/gym').success(function(output){
            console.log(output);
        })
    }

    console.log('factory working')
    return factory
})
