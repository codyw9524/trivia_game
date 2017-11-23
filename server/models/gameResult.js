const mongoose = require('mongoose');

const GameResultSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    totalAnswers: {
        type: Number
    },
    correctAnswers: {
        type: Number
    }
}, { timestamps: true });

mongoose.model('GameResult', GameResultSchema);
