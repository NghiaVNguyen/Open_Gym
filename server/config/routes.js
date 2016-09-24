console.log('routes');
var gym = require('../controllers/gymController.js');
var user = require('../controllers/userController.js');

module.exports = function(app){
  app.put('/gym', gym.search);
  app.post('/gym', gym.createGym);
  app.get('/gym/review/:id', gym.createReview);
  app.post('/login', user.createUser);
  app.get('/gym/:id', gym.searchOne);
  app.get('/gym', gym.searchCriteria);
  // app.delete('/friends/:id', friends.delete);

}
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
