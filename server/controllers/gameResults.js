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
        GameResult.create(req.body, (err, result) => {
            if (err) {
                return res.json(err);
            }
            return res.json(result);
        })
    }
}

module.exports = new GameResultsController();
