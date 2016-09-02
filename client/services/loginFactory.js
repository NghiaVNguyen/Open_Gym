app.factory('loginFactory', function($http, $location){
    var factory = [];
    factory.session = [];

    factory.createUser = function(newUser){
        console.log(newUser)
        $http.post('/login', newUser).success(function(output){
            console.log(output, 'new user INPUTTED')
        })
    }



    console.log('factory working')
    return factory
})
