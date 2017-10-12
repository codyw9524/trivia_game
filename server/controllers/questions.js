const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const User = mongoose.model('User');

let shuffle = function(arr) {
    for(let i = 0; i < arr.length; i++){
		let index = Math.floor(Math.random() * arr.length);
		let temp = arr[i];
		arr[i] = arr[index];
		arr[index] = temp;
	}
}

class QuestionsController {
    index(req, res) {
        Question.find({})
        .populate('answers')
        .exec((err, questions) => {
            if(err) {
                return res.json(err);
            }
            return res.json(questions);
        })
    }

    getRandom(req, res) {
        Question.findRandom().limit(parseInt(req.params.num)).populate('answers').exec((err, questions) => {
            if(err) {
                return res.json(err);
            }
            for(let question of questions) {
                shuffle(question.answers);
            }
            return res.json(questions);
        })
    }

    create(req, res) {
        let newQuestion = { question: req.body.question, user: req.session.user_id };
        Question.create(newQuestion, (err, question) => {
            if(err) {
                return res.json(err);
            }
            Answer.insertMany(req.body.answers, (err, answers) => {
                if(err) {
                    Question.findByIdAndRemove(question._id, (error, question) => {
                        if(error){
                            return res.json(error);
                        }
                    })
                    return res.json(err);
                } else {
                    Question.findByIdAndUpdate(
                        question._id,
                        { $push: { answers: { $each: answers } } },
                        { new: true },
                        (err, question) => {
                            if(err) {
                                return res.json(err);
                            }
                            return res.json(question);
                        }
                    );
                }
            });
        });
    }
}

module.exports = new QuestionsController();