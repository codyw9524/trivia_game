const mongoose = require('mongoose');
const GameResult = mongoose.model('GameResult');

class GameResultsController {
    index(req, res) {
        GameResult.find({})
        .sort('-correctAnswers')
        .populate('user')
        .exec((err, results) => {
            if (err) {
                return res.json(err);
            }
            return res.json(results);
        })
    }

    create(req, res){
        if (req.body.totalAnswers != req.body.totalQuestions) {
            return res.json({
                'errors': {
                    'questions': {
                        'message': 'Please answer every question.'
                    }
                }
            })
        }
        GameResult.create(req.body, (err, result) => {
            if (err) {
                return res.json(err);
            }
            return res.json(result);
        })
    }
}

module.exports = new GameResultsController();
