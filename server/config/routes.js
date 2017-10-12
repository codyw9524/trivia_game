const path = require('path');
const Users = require('../controllers/users');
const Questions = require('../controllers/questions');
const Answers = require('../controllers/answers');
const GameResults = require('../controllers/gameResults');

module.exports = function(app){
    app.get('/users', Users.index);
    app.post('/users', Users.create);
    app.delete('/users', Users.logout);
    app.post('/users/login', Users.authenticate);
    app.get('/users/:id', Users.show);
    app.put('/users/:id', Users.update);
    app.get('/session', Users.session);

    app.get('/questions', Questions.index);
    app.get('/questions/random/:num', Questions.getRandom);
    app.post('/questions', Questions.create);
    
    app.get('/answers', Answers.index);

    app.get('/results', GameResults.index);
    app.post('/results', GameResults.create);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}