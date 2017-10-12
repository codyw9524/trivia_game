const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const User = mongoose.model('User');

class AnswersController {
    index(req, res) {
        Answer.find({}, (err, answers) => {
            if(err) {
                return res.json(err);
            }
            return res.json(answers);
        })
    }
}

module.exports = new AnswersController();
